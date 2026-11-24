import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="page-header">
      <p class="eyebrow">
        <span aria-hidden="true"></span>
        {{ eyebrow() }}
      </p>
      <h1>
        {{ title() }}
        <span>{{ accent() }}</span>
      </h1>
      @if (description()) {
        <p class="description">{{ description() }}</p>
      }
    </header>
  `,
  styles: `
    .page-header {
      max-width: 780px;
    }
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      margin: 0;
      color: #fbbf24;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.24em;
      text-transform: uppercase;
    }
    .eyebrow span {
      width: 2.2rem;
      height: 1px;
      background: #fbbf24;
    }
    h1 {
      margin: 1rem 0 0;
      font-size: clamp(2.4rem, 6vw, 4.6rem);
      line-height: 1.04;
      letter-spacing: -0.045em;
      font-weight: 800;
      color: #f8fafc;
    }
    h1 span {
      display: block;
      background: linear-gradient(100deg, #fbbf24 10%, #f59e0b 45%, #22d3ee 95%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .description {
      margin: 1.4rem 0 0;
      max-width: 640px;
      color: #a9b6c9;
      font-size: clamp(0.98rem, 1.6vw, 1.12rem);
      line-height: 1.75;
    }
  `
})
export class PageHeader {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly accent = input.required<string>();
  readonly description = input<string>('');
}
