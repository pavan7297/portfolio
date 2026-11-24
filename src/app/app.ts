import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { Footer } from './shared/footer';
import { Nav } from './shared/nav';
import { SceneVariant, ThreeScene } from './shared/three-scene';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, ThreeScene, Nav, Footer],
  template: `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <app-three-scene [variant]="sceneVariant()" />
    <div class="scene-tint" aria-hidden="true"></div>

    <div class="site-shell">
      <app-nav />
      <main id="main-content" class="site-main" tabindex="-1">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: `
    .skip-link {
      position: fixed;
      top: -100px;
      left: 1rem;
      z-index: 100;
      padding: 0.75rem 1.2rem;
      border-radius: 0.75rem;
      background: #fbbf24;
      color: #0b0d13;
      font-weight: 700;
      text-decoration: none;
    }
    .skip-link:focus {
      top: 1rem;
    }
    .scene-tint {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at 78% 32%, rgb(34 211 238 / 8%), transparent 38%),
        radial-gradient(circle at 20% 70%, rgb(251 191 36 / 7%), transparent 42%),
        linear-gradient(to bottom, rgb(5 6 10 / 30%), rgb(5 6 10 / 78%));
    }
    .site-shell {
      position: relative;
      z-index: 1;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .site-main {
      flex: 1;
    }
    .site-main:focus {
      outline: none;
    }
  `
})
export class App {
  private readonly router = inject(Router);

  protected readonly sceneVariant = signal<SceneVariant>('hero');

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event) => this.toVariant(event.urlAfterRedirects)),
        takeUntilDestroyed()
      )
      .subscribe((variant) => this.sceneVariant.set(variant));
  }

  private toVariant(url: string): SceneVariant {
    const path = url.split('?')[0]?.replace(/\/$/, '') ?? '';
    switch (path) {
      case '':
        return 'hero';
      case '/about':
        return 'about';
      case '/experience':
        return 'experience';
      case '/skills':
        return 'skills';
      case '/projects':
        return 'projects';
      case '/services':
        return 'services';
      case '/contact':
        return 'contact';
      default:
        return 'error';
    }
  }
}
