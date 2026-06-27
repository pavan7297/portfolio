import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero2',
  template: `
  <!-- bg-[url('https://i.pinimg.com/736x/8b/85/65/8b856579696e1bc084c0621e2a4992a8.jpg')] -->
<section
  class="relative h-screen bg-[url('/assets/motohead.jpg')] bg-cover bg-center bg-no-repeat"
>
  <!-- Dark Overlay -->
  <div class="absolute inset-0 bg-black/60"></div>

  <!-- Content -->
  <div class="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12">
    <div class="flex flex-col justify-center h-full">

      <!-- Name -->
      <p class="text-yellow-400 uppercase tracking-[6px] text-sm md:text-base font-semibold">
        Pavan Srinivas
      </p>

      <!-- Heading -->
      <h1 class="mt-4 text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
        Java Backend <br>
        <span class="text-yellow-400">& Angular Developer</span>
      </h1>

      <!-- Description -->
      <p class="mt-6 max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed">
        I build modern, scalable web applications using Spring Boot,
        Angular, PostgreSQL, and MongoDB. Passionate about creating
        high-performance software with clean architecture.
      </p>

      <!-- Buttons -->
      <div class="mt-10 flex flex-wrap gap-4">
        <a
          routerLink="projects"
          class="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition duration-300"
        >
          View Projects
        </a>

        <a
          routerLink="contact"
          class="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
        >
          Contact Me
        </a>
      </div>

      <!-- Social Links -->
      <div class="mt-12 flex gap-6 text-white">
<div class="mt-12 flex gap-6 text-white">

  <a
    href="https://github.com/pavan7297"
    target="_blank"
    rel="noopener noreferrer"
    class="hover:text-yellow-400 transition duration-300"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/pavan-srinivas-malla"
    target="_blank"
    rel="noopener noreferrer"
    class="hover:text-yellow-400 transition duration-300"
  >
    LinkedIn
  </a>

  <a
    href="mailto:mallapavansrinivas@gmail.com"
    class="hover:text-yellow-400 transition duration-300"
  >
    Email
  </a>

</div>
      </div>

    </div>
  </div>

  <!-- Scroll Indicator -->
  <!-- <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <svg
      class="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
    </svg>
  </div> -->
</section>


    `,
  imports: [RouterLink]
})
export class hero2 {

}