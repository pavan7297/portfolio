import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Navbar {
  id: number;
  icon: string;
  router: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
<aside
  class="
    fixed z-50

    bottom-3 left-0 right-0

    bg-transparent
    border-0

    md:left-6
    md:right-auto
    md:top-1/2
    md:bottom-auto
    md:-translate-y-1/2

    md:bg-white/10
    md:backdrop-blur-xl
    md:border
    md:border-white/20
    md:rounded-full
    md:px-3
    md:py-5
    md:shadow-2xl
  "
>

  <nav
    class="
      flex items-center justify-evenly
      h-14 px-3

      md:h-auto
      md:px-0
      md:flex-col
      md:justify-center
      md:gap-5
    "
  >

    @for(item of nav; track item.id){

      <a
        [routerLink]="item.router"
        routerLinkActive="bg-yellow-400 text-black scale-110 rounded-full"
        [routerLinkActiveOptions]="{ exact: true }"

        class="
          flex items-center justify-center

          w-10 h-10
          text-lg
          text-gray-300

          rounded-full
          transition-all
          duration-300

          hover:bg-white/20
          hover:text-white

          md:w-14
          md:h-14
          md:text-xl
        "
      >
        <i [class]="item.icon"></i>
      </a>

    }

  </nav>

</aside>
  `,
})
export class SideNav {

  nav: Navbar[] = [
    {
      id: 1,
      icon: 'fa-solid fa-house',
      router: '/'
    },
    {
      id: 2,
      icon: 'fa-solid fa-user',
      router: '/about'
    },
    {
      id: 3,
      icon: 'fa-solid fa-code',
      router: '/projects'
    },
    {
      id: 4,
      icon: 'fa-solid fa-envelope',
      router: '/contact'
    }
  ];

}