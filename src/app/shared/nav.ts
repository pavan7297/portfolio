import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  readonly label: string;
  readonly path: string;
  readonly icon: string;
}

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-nav" (keydown.escape)="menuOpen.set(false)">
      <div class="nav-inner">
        <a routerLink="/" class="brand" aria-label="Pavan Srinivas — home">
          <span class="brand-mark" aria-hidden="true">PS</span>
          <span class="brand-copy">
            <strong>Pavan Srinivas</strong>
            <small>Java Full Stack Developer</small>
          </span>
        </a>

        <nav class="desktop-nav" aria-label="Primary navigation">
          @for (item of items; track item.path) {
            <a
              [routerLink]="item.path"
              routerLinkActive="active"
              [routerLinkActiveOptions]="exactRouteMatch"
              ariaCurrentWhenActive="page"
              class="nav-link">
              <i [class]="item.icon" aria-hidden="true"></i>
              <span>{{ item.label }}</span>
            </a>
          }
        </nav>

        <a routerLink="/contact" class="nav-cta">
          <span>Let's talk</span>
          <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>

        <button
          type="button"
          class="menu-toggle"
          (click)="menuOpen.set(!menuOpen())"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="mobile-navigation"
          [attr.aria-label]="menuOpen() ? 'Close navigation menu' : 'Open navigation menu'">
          <i [class]="menuOpen() ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" aria-hidden="true"></i>
        </button>
      </div>

      @if (menuOpen()) {
        <nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
          @for (item of items; track item.path) {
            <a
              [routerLink]="item.path"
              routerLinkActive="active"
              [routerLinkActiveOptions]="exactRouteMatch"
              ariaCurrentWhenActive="page"
              (click)="menuOpen.set(false)">
              <i [class]="item.icon" aria-hidden="true"></i>
              <span>{{ item.label }}</span>
            </a>
          }
        </nav>
      }
    </header>
  `,
  styles: `
    @reference '../../styles.css';

    .site-nav {
      @apply fixed inset-x-0 top-0 z-50 bg-[linear-gradient(to_bottom,#05060aeb,#05060a8c_70%,transparent)] px-[1.25rem] py-[0.85rem] backdrop-blur-[14px];
    }
    .nav-inner {
      @apply mx-auto flex max-w-[1200px] items-center justify-between gap-4;
    }
    .brand {
      @apply inline-flex items-center gap-[0.8rem] rounded-[1rem] text-slate-50 no-underline;
    }
    .brand-mark {
      @apply grid h-[2.7rem] w-[2.7rem] place-items-center rounded-[0.9rem] bg-[linear-gradient(135deg,#fbbf24,#f59e0b)] text-[#0b0d13] font-extrabold tracking-[-0.05em] shadow-[0_0_28px_#fbbf2459];
    }
    .brand-copy {
      @apply flex flex-col leading-[1.15];
    }
    .brand-copy strong {
      @apply text-[0.98rem];
    }
    .brand-copy small {
      @apply text-[0.68rem] uppercase tracking-[0.06em] text-slate-400;
    }
    .desktop-nav {
      @apply hidden items-center gap-[0.3rem] rounded-full border border-white/10 bg-[rgb(15_18_28_/_65%)] p-[0.35rem];
    }
    .nav-link {
      @apply inline-flex items-center gap-2 rounded-full px-[0.95rem] py-[0.6rem] text-[0.85rem] font-semibold text-slate-300 no-underline transition-[color,background] duration-[180ms] ease-[ease];
    }
    .nav-link i {
      @apply text-[0.8rem];
    }
    .nav-link:hover,
    .nav-link.active {
      @apply bg-amber-300 text-[#0b0d13];
    }
    .nav-cta {
      @apply hidden items-center gap-[0.55rem] rounded-full border border-[rgb(251_191_36_/_45%)] px-[1.1rem] py-[0.7rem] text-[0.85rem] font-bold text-amber-300 no-underline transition-[background,color] duration-[180ms] ease-[ease];
    }
    .nav-cta:hover {
      @apply bg-amber-300 text-[#0b0d13];
    }
    .menu-toggle {
      @apply grid h-[2.7rem] w-[2.7rem] cursor-pointer place-items-center rounded-[0.85rem] border border-white/15 bg-[rgb(15_18_28_/_80%)] text-slate-50;
    }
    .mobile-nav {
      @apply mx-auto mt-[0.7rem] grid max-w-[1200px] gap-[0.25rem] rounded-[1.25rem] border border-white/12 bg-[rgb(9_11_18_/_96%)] p-[0.6rem] shadow-[0_24px_60px_#00000073];
    }
    .mobile-nav a {
      @apply flex items-center gap-[0.8rem] rounded-[0.8rem] px-[1rem] py-[0.85rem] font-semibold text-slate-300 no-underline;
    }
    .mobile-nav a.active {
      @apply bg-amber-300 text-[#0b0d13];
    }
    @media (min-width: 900px) {
      .desktop-nav,
      .nav-cta {
        @apply inline-flex;
      }
      .menu-toggle {
        @apply hidden;
      }
    }
  `
})
export class Nav {
  protected readonly menuOpen = signal(false);
  protected readonly exactRouteMatch = { exact: true };

  protected readonly items: readonly NavItem[] = [
    { label: 'Home', path: '/', icon: 'fa-solid fa-house' },
    { label: 'About', path: '/about', icon: 'fa-solid fa-user' },
    { label: 'Experience', path: '/experience', icon: 'fa-solid fa-clock-rotate-left' },
    { label: 'Skills', path: '/skills', icon: 'fa-solid fa-chart-simple' },
    { label: 'Projects', path: '/projects', icon: 'fa-solid fa-diagram-project' },
    { label: 'Services', path: '/services', icon: 'fa-solid fa-layer-group' },
    { label: 'Contact', path: '/contact', icon: 'fa-solid fa-paper-plane' }
  ];
}
