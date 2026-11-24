# Pavan Srinivas — 3D Portfolio

An Angular 21 single-page portfolio with interactive Three.js background scenes, separate lazy-loaded pages and content driven from one data file.

## Pages

| Route | Page | 3D scene |
| --- | --- | --- |
| `/` | Home | Rotating core, rings and starfield |
| `/about` | About | Wireframe core with rings and orbiting nodes |
| `/experience` | Experience | Helix timeline |
| `/skills` | Skills | Concentric rings and tech blocks |
| `/projects` | Projects | Floating project cards |
| `/services` | Services | Rotating service rings |
| `/contact` | Contact | Wave grid and pulse |
| `**` | 404 | Glitch knot |

## Structure

```
src/app/
  data/portfolio.ts      # all profile, experience, project, skill and service content
  shared/
    three-scene.ts       # reusable WebGL scene engine (one per route variant)
    nav.ts, footer.ts, page-header.ts
  pages/                 # one standalone component (+ html/css) per route
  app.routes.ts          # lazy-loaded routes and page titles
  app.ts                 # shell: scene, nav, router outlet, footer
```

## Backgrounds

Full-screen skybox textures live in `src/assets/skyboxes/`. `shared/three-scene.ts` alternates them by route: the alien nebula on Home, Skills, Projects and 404, and the alien cave on About, Experience, Services and Contact. The per-page Three.js shapes render on top, and pointer parallax adds subtle movement.

Both skyboxes are previews of models by [Jungle Jim](https://sketchfab.com/jungle_jim), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): [Alien Space Nebula 2](https://sketchfab.com/3d-models/alien-space-nebula-2-skybox-a1c688c6e8164fd4ad5a7e56047e8b50) and [Stylized Alien Cave](https://sketchfab.com/3d-models/stylized-alien-cave-skybox-7033c9debdea4a09933e012b87f20c1c). Credit is also shown in the site footer.

## Content updates

Edit `src/app/data/portfolio.ts` — nothing else needs to change. The profile content is based on the public LinkedIn profile (https://www.linkedin.com/in/pavan-srinivas-malla/), the previous portfolio content and the resume skills inventory. Please review names, dates, links and numbers before publishing.

## Development

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production bundle in dist/
npm test           # unit tests (Vitest)
```

## Accessibility & performance

- Decorative canvases are `aria-hidden`; skip link, labelled navigation, focus styles and ARIA on form/progress bars.
- `prefers-reduced-motion` renders a single static frame and disables CSS transitions.
- WebGL failure is handled gracefully with a CSS-only gradient background.
- Pages are lazy-loaded; Three.js is only loaded once in the app shell.
