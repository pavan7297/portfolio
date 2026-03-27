import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="min-h-screen bg-gray-100 p-6 flex justify-center">

  <div class="max-w-5xl w-full space-y-10">

    <!-- HEADER -->
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800">My Experience</h1>
      <p class="text-gray-600 mt-2">Professional journey & real-world projects</p>
    </div>

    <!-- EXPERIENCE LIST -->
    <div class="space-y-8">

      <!-- FESTEVE -->
      <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-l-4 border-blue-500">
        <h2 class="text-2xl font-semibold text-gray-800">
          Software Engineer
        </h2>
        <p class="text-blue-500 text-sm font-medium">
          FestEve (CrazyTrio Pvt Ltd) • May 2023 - Sep 2025
        </p>
        <p class="text-gray-500 text-sm">Hyderabad, Telangana</p>

        <ul class="mt-4 text-gray-700 space-y-2 list-disc list-inside">
          <li>Developed full-stack e-commerce application (Angular + Spring Boot + PostgreSQL)</li>
          <li>Improved content scalability by <span class="font-semibold">60%</span> and productivity by <span class="font-semibold">40%</span></li>
          <li>Collaborated with UI/UX designers to enhance application performance and usability</li>
          <li>Created API documentation and system design specifications</li>
        </ul>
      </div>

      <!-- PROCREATE -->
      <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-l-4 border-green-500">
        <h2 class="text-2xl font-semibold text-gray-800">
          Associate Software Engineer
        </h2>
        <p class="text-green-500 text-sm font-medium">
          Procreate Techno Systems • Jul 2022 - Mar 2023
        </p>
        <p class="text-gray-500 text-sm">Hyderabad, Telangana</p>

        <ul class="mt-4 text-gray-700 space-y-2 list-disc list-inside">
          <li>Worked on Emergency Medical Response System with a team of 6 developers</li>
          <li>Built full-stack modules using Angular and Spring Boot</li>
          <li>Integrated REST APIs with frontend for better performance</li>
          <li>Optimized APIs, reducing response time by <span class="font-semibold">15%</span></li>
        </ul>
      </div>

    </div>

    <!-- SKILLS SECTION -->
    <div class="bg-white p-6 rounded-xl shadow">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>

      <div class="flex flex-wrap gap-3">
        <span class="px-3 py-1 bg-gray-200 rounded-full">Java</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full">Spring Boot</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full">Angular</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full">TypeScript</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full">Tailwind CSS</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full">Node.js</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full">PostgreSQL</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full">Docker</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full">AWS</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full">Git</span>
      </div>
    </div>

  </div>

</div>
  `
})
export class ExperienceComponent {}
