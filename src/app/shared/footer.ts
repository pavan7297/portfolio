import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../data/portfolio';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div>
            <div class="footer-brand">
              <span class="footer-mark" aria-hidden="true">PS</span>
              <span>{{ profile.shortName }}</span>
            </div>
            <p>{{ profile.headline }}</p>
            <p class="muted">{{ profile.location }}</p>
          </div>

          <nav class="footer-links" aria-label="Footer navigation">
            <a routerLink="/about">About</a>
            <a routerLink="/experience">Experience</a>
            <a routerLink="/skills">Skills</a>
            <a routerLink="/projects">Projects</a>
            <a routerLink="/services">Services</a>
            <a routerLink="/contact">Contact</a>
          </nav>

          <div class="footer-socials">
            @for (social of profile.socials; track social.label) {
              <a [href]="social.url" target="_blank" rel="noopener noreferrer" [attr.aria-label]="social.label">
                <i [class]="social.icon" aria-hidden="true"></i>
              </a>
            }
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 {{ profile.name }}. All rights reserved.</p>
          <p class="credits">
            Skyboxes by
            <a href="https://sketchfab.com/jungle_jim" target="_blank" rel="noopener noreferrer">Jungle Jim</a>
            —
            <a
              href="https://sketchfab.com/3d-models/alien-space-nebula-2-skybox-a1c688c6e8164fd4ad5a7e56047e8b50"
              target="_blank"
              rel="noopener noreferrer">Nebula</a>,
            <a
              href="https://sketchfab.com/3d-models/stylized-alien-cave-skybox-7033c9debdea4a09933e012b87f20c1c"
              target="_blank"
              rel="noopener noreferrer">Alien Cave</a>
            ·
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          </p>
          <button type="button" (click)="backToTop()">
            Back to top <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .site-footer {
      position: relative;
      z-index: 2;
      border-top: 1px solid rgb(255 255 255 / 10%);
      background: rgb(5 6 10 / 82%);
      backdrop-filter: blur(12px);
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 1.25rem 1.5rem;
    }
    .footer-top {
      display: grid;
      gap: 2rem;
    }
    .footer-brand {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      font-size: 1.15rem;
      font-weight: 700;
    }
    .footer-mark {
      display: grid;
      place-items: center;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 0.7rem;
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      color: #0b0d13;
      font-size: 0.8rem;
      font-weight: 800;
    }
    .footer-top p {
      margin: 0.85rem 0 0;
      color: #cbd5e1;
      font-size: 0.9rem;
    }
    .footer-top .muted {
      color: #64748b;
      font-size: 0.82rem;
      margin-top: 0.25rem;
    }
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem 1.3rem;
    }
    .footer-links a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.88rem;
    }
    .footer-links a:hover {
      color: #fbbf24;
    }
    .footer-socials {
      display: flex;
      gap: 0.6rem;
    }
    .footer-socials a {
      display: grid;
      place-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border: 1px solid rgb(255 255 255 / 14%);
      border-radius: 0.75rem;
      color: #cbd5e1;
      text-decoration: none;
      transition: border-color 180ms ease, color 180ms ease, transform 180ms ease;
    }
    .footer-socials a:hover {
      color: #fbbf24;
      border-color: #fbbf24;
      transform: translateY(-3px);
    }
    .footer-bottom {
      margin-top: 2.5rem;
      padding-top: 1.4rem;
      border-top: 1px solid rgb(255 255 255 / 8%);
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;
      color: #64748b;
      font-size: 0.8rem;
    }
    .footer-bottom p {
      margin: 0;
    }
    .credits a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .credits a:hover {
      color: #fbbf24;
    }
    .footer-bottom button {
      border: 0;
      background: transparent;
      color: #94a3b8;
      cursor: pointer;
      font-size: 0.8rem;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }
    .footer-bottom button:hover {
      color: #fbbf24;
    }
    @media (min-width: 800px) {
      .footer-top {
        grid-template-columns: 1.4fr 1fr auto;
        align-items: start;
      }
      .footer-links {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.7rem 1.4rem;
      }
    }
  `
})
export class Footer {
  protected readonly profile = profile;

  protected backToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
