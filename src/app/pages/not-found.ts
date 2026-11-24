import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <p class="eyebrow">Lost in 3D space</p>
      <p class="code font-display">404</p>
      <h1 class="font-display">This page doesn't exist.</h1>
      <p class="copy">
        The link may be outdated, or the page might have moved. Let's get you back somewhere familiar.
      </p>
      <div class="actions">
        <a routerLink="/" class="btn btn-primary"><i class="fa-solid fa-house" aria-hidden="true"></i> Back home</a>
        <a routerLink="/projects" class="btn btn-ghost">Browse projects</a>
      </div>
    </section>
  `,
  styles: `
    .not-found {
      max-width: 1200px;
      margin: 0 auto;
      min-height: 78vh;
      padding: 9rem 1.25rem 5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    .code {
      margin: 1rem 0 0;
      font-size: clamp(6rem, 20vw, 14rem);
      line-height: 0.9;
      letter-spacing: -0.08em;
      background: linear-gradient(100deg, #fbbf24, #22d3ee);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    h1 {
      margin: 1rem 0 0;
      font-size: clamp(1.8rem, 4vw, 3rem);
      letter-spacing: -0.04em;
    }
    .copy {
      margin: 1rem 0 0;
      max-width: 500px;
      color: #9aa8bc;
      line-height: 1.8;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-top: 2rem;
    }
  `
})
export class NotFoundPage {}
