import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  effect,
  input,
  untracked,
  viewChild
} from '@angular/core';
import {
  AdditiveBlending,
  AmbientLight,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Color,
  DoubleSide,
  EdgesGeometry,
  Float32BufferAttribute,
  Group,
  IcosahedronGeometry,
  Line,
  LineBasicMaterial,
  LineSegments,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  OctahedronGeometry,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Points,
  PointsMaterial,
  Scene,

  SRGBColorSpace,
  Texture,
  TextureLoader,
  TorusGeometry,
  TorusKnotGeometry,
  Vector2,
  WebGLRenderer,
  WireframeGeometry
} from 'three';

export type SceneVariant =
  | 'hero'
  | 'about'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'services'
  | 'contact'
  | 'error';

type DisposableObject = Object3D & {
  geometry?: BufferGeometry;
  material?: Material | Material[];
};

interface SceneObjects {
  readonly group: Group;
  readonly update: (time: number, pointer: Vector2) => void;
}

const AMBER = 0xfbbf24;
const CYAN = 0x22d3ee;
const VIOLET = 0xa78bfa;

/** Local previews of the CC BY skyboxes by Jungle Jim (see footer credits). */
const SKYBOXES = {
  nebula: 'assets/skyboxes/alien-space-nebula.jpg',
  cave: 'assets/skyboxes/alien-cave.jpg'
} as const;

type SkyboxKey = keyof typeof SKYBOXES;

/** Alternate the two skyboxes so neighbouring pages feel distinct. */
const SKYBOX_BY_VARIANT: Record<SceneVariant, SkyboxKey> = {
  hero: 'nebula',
  about: 'cave',
  experience: 'cave',
  skills: 'nebula',
  projects: 'nebula',
  services: 'cave',
  contact: 'cave',
  error: 'nebula'
};

/**
 * Decorative WebGL background shared by every page.
 * The canvas is purely presentational and is hidden from assistive technology.
 */
@Component({
  selector: 'app-three-scene',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div #host class="scene-canvas" aria-hidden="true"></div>`,
  styles: `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      z-index: 0;
      pointer-events: none;
    }
    .scene-canvas {
      width: 100%;
      height: 100%;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `
})
export class ThreeScene implements AfterViewInit, OnDestroy {
  readonly variant = input<SceneVariant>('hero');

  private readonly host = viewChild.required<ElementRef<HTMLDivElement>>('host');
  private readonly pointer = new Vector2(0, 0);
  private readonly pointerTarget = new Vector2(0, 0);
  private readonly textureLoader = new TextureLoader();
  private readonly skyboxes = new Map<SkyboxKey, Texture>();
  private activeSkybox?: SkyboxKey;

  private scene?: Scene;
  private camera?: PerspectiveCamera;
  private renderer?: WebGLRenderer;
  private objects?: SceneObjects;
  private resizeObserver?: ResizeObserver;
  private frame = 0;
  private ready = false;
  private reducedMotion = false;

  constructor() {
    effect(() => {
      const variant = this.variant();
      untracked(() => {
        if (this.ready) {
          this.rebuild(variant);
        }
      });
    });
  }

  ngAfterViewInit(): void {
    const host = this.host().nativeElement;
    this.reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      55,
      (host.clientWidth || window.innerWidth) / (host.clientHeight || window.innerHeight),
      0.1,
      100
    );
    this.camera.position.set(0, 0, 10);

    try {
      this.renderer = new WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch {
      // WebGL is unavailable (for example in some test environments).
      // The site remains fully usable with the CSS gradient background.
      this.scene = undefined;
      return;
    }
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(host.clientWidth || window.innerWidth, host.clientHeight || window.innerHeight);
    this.renderer.setClearColor(new Color(0x05060a), 0);
    this.renderer.domElement.setAttribute('aria-hidden', 'true');
    host.appendChild(this.renderer.domElement);

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.onResize());
      this.resizeObserver.observe(host);
    }
    window.addEventListener('pointermove', this.onPointerMove, { passive: true });

    // rebuild() starts the animation loop (or renders a single frame when reduced motion is on).
    this.rebuild(this.variant());
    this.ready = true;
  }

  ngOnDestroy(): void {
    this.ready = false;
    this.active = false;
    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }
    window.removeEventListener('pointermove', this.onPointerMove);
    this.resizeObserver?.disconnect();
    // this.disposeObjects();
    if (this.scene) {
      this.scene.background = null;
    }
    this.skyboxes.forEach((texture) => texture.dispose());
    this.skyboxes.clear();
    this.activeSkybox = undefined;
    this.renderer?.dispose();
    this.renderer?.domElement.remove();
  }

  private active = false;

  private readonly onPointerMove = (event: PointerEvent): void => {
    this.pointerTarget.set(
      (event.clientX / window.innerWidth - 0.5) * 2,
      (event.clientY / window.innerHeight - 0.5) * 2
    );
  };

  private readonly tick = (time: number): void => {
    if (!this.active) {
      return;
    }
    this.pointer.lerp(this.pointerTarget, 0.045);
    this.updateSkyboxTransform();
    this.objects?.update(time * 0.001, this.pointer);
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
    this.frame = requestAnimationFrame(this.tick);
  };

  private onResize(): void {
    if (!this.renderer || !this.camera || !this.scene) {
      return;
    }
    const host = this.host().nativeElement;
    const width = host.clientWidth || window.innerWidth;
    const height = host.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.updateSkyboxTransform();
    if (this.reducedMotion) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  private rebuild(variant: SceneVariant): void {
    if (!this.scene || !this.renderer) {
      return;
    }
    // this.disposeObjects();
    this.applySkybox(SKYBOX_BY_VARIANT[variant]);

    const group = new Group();
    const objects = this.createVariant(variant, group);
    this.objects = objects;
    this.scene.add(group);

    group.add(new AmbientLight(0xffffff, 0.55));
    const amberLight = new PointLight(AMBER, 24, 18);
    amberLight.position.set(4, 3, 5);
    group.add(amberLight);
    const cyanLight = new PointLight(CYAN, 18, 18);
    cyanLight.position.set(-5, -2, 3);
    group.add(cyanLight);

    this.active = !this.reducedMotion;
    objects.update(0, this.pointer);
    this.renderer.render(this.scene, this.camera!);

    if (this.active) {
      cancelAnimationFrame(this.frame);
      this.frame = requestAnimationFrame(this.tick);
    }
  }

  private applySkybox(key: SkyboxKey): void {
    this.activeSkybox = key;
    const cached = this.skyboxes.get(key);
    if (cached) {
      this.setSkybox(cached);
      return;
    }
    this.textureLoader.load(
      SKYBOXES[key],
      (texture) => {
        texture.colorSpace = SRGBColorSpace;
        this.skyboxes.set(key, texture);
        if (this.activeSkybox === key) {
          this.setSkybox(texture);
        }
      },
      undefined,
      () => {
        // The CSS gradient remains visible when the local texture cannot load.
      }
    );
  }

  private setSkybox(texture: Texture): void {
    if (!this.scene) {
      return;
    }
    this.scene.background = texture;
    this.updateSkyboxTransform();
    if (this.renderer && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /** Emulates `background-size: cover` and adds a safe amount of pointer parallax. */
  private updateSkyboxTransform(): void {
    const texture = this.activeSkybox ? this.skyboxes.get(this.activeSkybox) : undefined;
    if (!texture) {
      return;
    }
    const host = this.host().nativeElement;
    const viewportAspect =
      (host.clientWidth || window.innerWidth) / (host.clientHeight || window.innerHeight);
    const zoom = 1.08;
    const repeatX = Math.min(1, viewportAspect / (16 / 9)) * zoom;
    const repeatY = Math.min(1, (16 / 9) / viewportAspect) * zoom;
    texture.repeat.set(repeatX, repeatY);
    texture.offset.set(
      (1 - repeatX) / 2 + (this.pointer.x * (repeatX - 1)) / 2,
      (1 - repeatY) / 2 - (this.pointer.y * (repeatY - 1)) / 2
    );
  }

  // private disposeObjects(): void {
  //   this.active = false;
  //   if (!this.objects || !this.scene) {
  //     return;
  //   }
  //   this.objects.group.traverse((object: Object3D) => {
  //     const disposable = object as DisposableObject;
  //     disposable.geometry?.dispose();
  //     const material = disposable.material;
  //     if (Array.isArray(material)) {
  //       material.forEach((item) => item.dispose());
  //     } else {
  //       material?.dispose();
  //     }
  //   });
  //   this.scene.clear();
  //   this.objects = undefined;
  // }

  // private wire(geometry: BufferGeometry, color: number, opacity = 0.85): LineSegments {
  //   const wireframe = new WireframeGeometry(geometry);
  //   geometry.dispose();
  //   return new LineSegments(
  //     wireframe,
  //     new LineBasicMaterial({ color, transparent: true, opacity })
  //   );
  // }

  private particles(count: number, color: number, size: number, spread: number): Points {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = spread * (0.35 + Math.random() * 0.65);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    return new Points(
      geometry,
      new PointsMaterial({
        color,
        size,
        transparent: true,
        opacity: 0.75,
        sizeAttenuation: true,
        blending: AdditiveBlending,
        depthWrite: false
      })
    );
  }

  private solid(radius: number, color: number): Mesh {
    return new Mesh(
      new IcosahedronGeometry(radius, 1),
      new MeshStandardMaterial({
        color: 0x0b1220,
        emissive: color,
        emissiveIntensity: 0.28,
        metalness: 0.65,
        roughness: 0.32,
        flatShading: true
      })
    );
  }

  private ring(radius: number, color: number, opacity = 0.5, tube = 0.012): Mesh {
    return new Mesh(
      new TorusGeometry(radius, tube, 8, 140),
      new MeshBasicMaterial({ color, transparent: true, opacity })
    );
  }

  private createVariant(variant: SceneVariant, group: Group): SceneObjects {
    switch (variant) {
      case 'about':
        return this.createAbout(group);
      case 'experience':
        return this.createExperience(group);
      case 'skills':
        return this.createSkills(group);
      case 'projects':
        return this.createProjects(group);
      case 'services':
        return this.createServices(group);
      case 'contact':
        return this.createContact(group);
      case 'error':
        return this.createError(group);
      default:
        return this.createHero(group);
    }
  }

  private createHero(group: Group): SceneObjects {
    // const core = this.solid(1.65, 0x2563eb);
    // // const shell = this.wire(new IcosahedronGeometry(1.72, 1), AMBER, 0.8);
    // const ringA = this.ring(2.55, AMBER, 0.55);
    // const ringB = this.ring(2.95, CYAN, 0.45);
    // ringA.rotation.x = 1.05;
    // ringB.rotation.set(0.6, 0.9, 0.2);
    // const stars = this.particles(850, 0x93c5fd, 0.055, 19);
    // group.add(stars, core, ringA, ringB); //shell

    return {
      group,
      update: (time, pointer) => {
        // core.rotation.y = time * 0.2;
        // core.rotation.x = Math.sin(time * 0.35) * 0.14;
        // // shell.rotation.copy(core.rotation);
        // ringA.rotation.z = time * 0.12;
        // ringB.rotation.y = 0.9 + time * -0.09;
        // stars.rotation.y = time * 0.012;
        // group.rotation.y = pointer.x * 0.16;
        // group.rotation.x = -pointer.y * 0.1;
      }
    };
  }

  private createAbout(group: Group): SceneObjects {
    // const core = this.wire(new OctahedronGeometry(1.1, 0), AMBER, 0.9);
    const ringA = this.ring(2.9, AMBER, 0.45, 0.015);
    const ringB = this.ring(3.35, CYAN, 0.35, 0.01);
    const ringC = this.ring(3.8, VIOLET, 0.3, 0.01);
    // ringA.rotation.x = 1.2;
    // ringB.rotation.set(0.4, 1.1, 0.5);
    // ringC.rotation.set(1.4, 0.2, 0.8);
    // const stars = this.particles(620, 0xc4b5fd, 0.05, 17);
    // group.add(stars, ringA, ringB, ringC); //core

    return {
      group,
      update: (time, pointer) => {
        // core.rotation.set(time * 0.22, time * 0.3, 0);
        // ringA.rotation.z = time * 0.14;
        // ringB.rotation.x = 0.4 + time * -0.1;
        // ringC.rotation.y = 0.2 + time * 0.08;
        // stars.rotation.y = time * -0.01;
        // group.rotation.y = pointer.x * 0.14;
      }
    };
  }

  private createExperience(group: Group): SceneObjects {
    const helix = new Group();
    const nodes: Mesh[] = [];
    for (let i = 0; i < 38; i++) {
      const angle = i * 0.48;
      const y = -3.4 + i * 0.18;
      const x = Math.cos(angle) * 1.9;
      const z = Math.sin(angle) * 1.9;
      const node = new Mesh(
        new BoxGeometry(0.16, 0.16, 0.16),
        new MeshBasicMaterial({ color: i % 5 === 0 ? CYAN : AMBER, transparent: true, opacity: 0.85 })
      );
      node.position.set(x, y, z);
      node.rotation.y = angle;
      nodes.push(node);
      helix.add(node);
    }

    const linePositions: number[] = [];
    nodes.forEach((node) => {
      linePositions.push(node.position.x, node.position.y, node.position.z);
    });
    // const pathGeometry = new BufferGeometry();
    // pathGeometry.setAttribute('position', new Float32BufferAttribute(linePositions, 3));
    // const path = new Line(
    //   pathGeometry,
    //   new LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.35 })
    // );
    // const halo = this.wire(new IcosahedronGeometry(4.4, 1), VIOLET, 0.1);
    const stars = this.particles(560, 0x93c5fd, 0.045, 18);
    // group.add(helix, path,  stars); //halo

    return {
      group,
      update: (time, pointer) => {
        // helix.rotation.y = time * 0.14;
        // path.rotation.y = helix.rotation.y;
        // // halo.rotation.y = time * -0.03;
        // stars.rotation.y = time * 0.008;
        // group.position.y = Math.sin(time * 0.5) * 0.14;
        // group.rotation.z = pointer.x * 0.06;
      }
    };
  }

  private createSkills(group: Group): SceneObjects {
    const rings: Mesh[] = [
      this.ring(2.1, AMBER, 0.55, 0.018),
      this.ring(2.85, CYAN, 0.45, 0.014),
      this.ring(3.6, VIOLET, 0.35, 0.012)
    ];
    rings[0]?.rotation.set(1.2, 0, 0);
    rings[1]?.rotation.set(0.3, 1.15, 0.4);
    rings[2]?.rotation.set(1.5, 0.4, 0.9);
    // const core = this.wire(new IcosahedronGeometry(1.25, 1), AMBER, 0.75);
    const stars = this.particles(520, 0x67e8f9, 0.05, 16);
    // group.add( stars, ...rings); //core

    const blocks: Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const block = new Mesh(
        new BoxGeometry(0.2, 0.2, 0.2),
        new MeshBasicMaterial({ color: i % 4 === 0 ? VIOLET : i % 2 === 0 ? AMBER : CYAN })
      );
      blocks.push(block);
      group.add(block);
    }

    return {
      group,
      update: (time, pointer) => {
        // core.rotation.set(time * 0.16, time * 0.24, 0);
        // rings.forEach((item, index) => {
        //   item.rotation.z += 0.001 + index * 0.0004;
        //   item.rotation.x += 0.0005;
        // });
        // stars.rotation.y = time * 0.01;
        // blocks.forEach((block, index) => {
        //   const angle = time * (0.12 + (index % 3) * 0.03) + (index / blocks.length) * Math.PI * 2;
        //   const radius = 2.1 + (index % 4) * 0.5;
        //   block.position.set(
        //     Math.cos(angle) * radius,
        //     Math.sin(angle * 2 + index) * 1.5,
        //     Math.sin(angle) * radius
        //   );
        //   block.rotation.set(time * 0.5 + index, time * 0.3, 0);
        // });
        // group.rotation.y = pointer.x * 0.12;
        // group.rotation.x = -pointer.y * 0.08;
      }
    };
  }

  private createProjects(group: Group): SceneObjects {
    const palette = [AMBER, CYAN, VIOLET, 0x34d399, 0xf472b6, 0x60a5fa];
    const cards: Group[] = [];
    for (let i = 0; i < 6; i++) {
      const card = new Group();
      const geometry = new BoxGeometry(2.1, 1.35, 0.06);
      const face = new Mesh(
        geometry,
        new MeshBasicMaterial({
          color: palette[i] ?? AMBER,
          transparent: true,
          opacity: 0.14,
          side: DoubleSide
        })
      );
      const edges = new LineSegments(
        new EdgesGeometry(geometry),
        new LineBasicMaterial({ color: palette[i] ?? AMBER, transparent: true, opacity: 0.75 })
      );
      card.add(face, edges);
      const angle = (i / 6) * Math.PI * 2;
      card.position.set(Math.cos(angle) * 3.5, Math.sin(angle * 2) * 0.8, Math.sin(angle) * 3.5);
      card.lookAt(0, 0, 0);
      cards.push(card);
      // group.add(card);
    }
    // const core = this.wire(new OctahedronGeometry(1.05, 0), AMBER, 0.6);
    const stars = this.particles(540, 0xc4b5fd, 0.05, 17);
    // group.add(, stars);

    return {
      group,
      update: (time, pointer) => {
        group.rotation.y = time * 0.09 + pointer.x * 0.1;
        cards.forEach((card, index) => {
          card.position.y = Math.sin(time * 0.7 + index) * 0.55;
          card.rotation.z = Math.sin(time * 0.4 + index) * 0.08;
        });
        // core.rotation.set(time * 0.2, time * -0.28, 0);
        // stars.rotation.y = time * -0.008;
      }
    };
  }

  private createServices(group: Group): SceneObjects {
    const rings: Mesh[] = [
      this.ring(1.7, AMBER, 0.7, 0.025),
      this.ring(2.45, CYAN, 0.5, 0.018),
      this.ring(3.2, VIOLET, 0.38, 0.014)
    ];
    rings[0]?.rotation.set(1.1, 0.2, 0);
    rings[1]?.rotation.set(0.2, 1.2, 0.6);
    rings[2]?.rotation.set(1.4, 0.6, 0.2);
    // const core = this.wire(new OctahedronGeometry(1.05, 1), AMBER, 0.85);
    const stars = this.particles(580, 0x67e8f9, 0.05, 17);
    // group.add(core, stars, ...rings);

    return {
      group,
      update: (time, pointer) => {
        // core.rotation.set(time * 0.18, time * 0.3, time * 0.1);
        rings[0]!.rotation.z = time * 0.22;
        rings[1]!.rotation.y = 1.2 + time * -0.16;
        rings[2]!.rotation.x = 1.4 + time * 0.12;
        // stars.rotation.y = time * 0.009;
        // group.rotation.y = pointer.x * 0.1;
      }
    };
  }

  private createContact(group: Group): SceneObjects {
    const gridGeometry = new PlaneGeometry(16, 16, 42, 42);
    const basePositions = (gridGeometry.getAttribute('position') as BufferAttribute).array.slice();
    const grid = new Mesh(
      gridGeometry,
      new MeshBasicMaterial({
        color: CYAN,
        wireframe: true,
        transparent: true,
        opacity: 0.28
      })
    );
    grid.rotation.x = -Math.PI / 2;
    grid.position.y = -2.6;
    // const core = this.wire(new IcosahedronGeometry(1.3, 1), AMBER, 0.7);
    const halo = this.ring(2.2, VIOLET, 0.35, 0.015);
    halo.rotation.x = 1.1;
    const stars = this.particles(760, 0x93c5fd, 0.05, 18);
    // group.add(grid, core, halo, stars);

    return {
      group,
      update: (time, pointer) => {
        const attribute = gridGeometry.getAttribute('position') as BufferAttribute;
        for (let i = 0; i < attribute.count; i++) {
          const x = basePositions[i * 3] ?? 0;
          const y = basePositions[i * 3 + 1] ?? 0;
          attribute.setZ(
            i,
            Math.sin(x * 0.55 + time * 1.2) * 0.42 + Math.cos(y * 0.55 + time * 0.9) * 0.32
          );
        }
        attribute.needsUpdate = true;
        // core.rotation.set(time * 0.14, time * 0.22, 0);
        // core.scale.setScalar(1 + Math.sin(time * 1.4) * 0.04);
        // halo.rotation.z = time * 0.18;
        // stars.position.y = (time * 0.35) % 4 - 2;
        // group.rotation.y = pointer.x * 0.1;
      }
    };
  }

  private createError(group: Group): SceneObjects {
    // const knot = this.wire(new TorusKnotGeometry(1.5, 0.42, 130, 10, 2, 3), CYAN, 0.85);
    // const inner = this.wire(new IcosahedronGeometry(0.9, 0), AMBER, 0.7);
    const stars = this.particles(600, 0xfca5a5, 0.055, 17);
    // group.add(knot, inner, stars);

    return {
      group,
      update: (time, pointer) => {
        // knot.rotation.set(time * 0.24, time * 0.32, Math.sin(time * 2) * 0.05);
        // inner.rotation.set(time * -0.4, time * 0.2, 0);
        // stars.rotation.y = time * -0.02;
        // group.rotation.z = pointer.x * 0.08;
      }
    };
  }
}
