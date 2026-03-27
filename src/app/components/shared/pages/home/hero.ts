import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
<section class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

  <!-- HERO TEXT -->
  <div class="space-y-4 max-w-3xl">

    <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
      Hi, I'm <span class="text-gray-300">{{ devname }}</span>
    </h1>

    <h2 class="text-lg sm:text-2xl text-gray-400">
      {{ devstack }}
    </h2>

    <p class="text-gray-500 mt-4">
      Building scalable web applications with clean UI & powerful backend systems.
    </p>

  </div>

  <!-- BUTTONS -->
  <div class="flex gap-4 mt-10 flex-wrap justify-center">

    <a routerLink="/contact"
      class="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-80 transition">
      Contact Me
    </a>

    <a routerLink="/experience"
      class="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
      View Experience
    </a>

  </div>

</section>
  `
})
export class hero {

  devname: string = "Pavan Srinivas";
  devstack: string = "Java Full Stack Developer";

}
