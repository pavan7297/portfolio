import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-services",
  template: `
<div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center">

  <div class="max-w-6xl w-full flex flex-col gap-12">

    <!-- ================= HEADER ================= -->
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        My Services
      </h1>
      <p class="text-gray-600 mt-3">
        Building scalable full-stack applications with modern technologies
      </p>
    </div>

    <!-- ================= SERVICES GRID ================= -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- SERVICE 1 -->
      <div class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col gap-4 border border-gray-100">

        <!-- ICON -->
        <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-xl">
          💻
        </div>

        <h2 class="text-xl font-semibold group-hover:text-purple-600 transition">
          Full Stack Web Apps
        </h2>

        <p class="text-gray-500 text-sm">
          End-to-end development using Angular & Spring Boot with scalable architecture.
        </p>

        <ul class="text-xs text-gray-600 list-disc pl-4 space-y-1">
          <li>Angular + Tailwind UI</li>
          <li>Spring Boot REST APIs</li>
          <li>JWT Authentication</li>
          <li>MySQL / PostgreSQL</li>
        </ul>

      </div>

      <!-- SERVICE 2 -->
      <div class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col gap-4 border border-gray-100">

        <!-- ICON -->
        <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 text-xl">
          🛕
        </div>

        <h2 class="text-xl font-semibold group-hover:text-green-600 transition">
          Temple Booking System
        </h2>

        <p class="text-gray-500 text-sm">
          Public booking system with online payments and token generation.
        </p>

        <ul class="text-xs text-gray-600 list-disc pl-4 space-y-1">
          <li>Spring Boot + Thymeleaf</li>
          <li>Payment Gateway Integration</li>
          <li>Auto Token System</li>
          <li>Admin Dashboard</li>
        </ul>

      </div>

      <!-- SERVICE 3 -->
      <div class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col gap-4 border border-gray-100">

        <!-- ICON -->
        <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl">
          🛒
        </div>

        <h2 class="text-xl font-semibold group-hover:text-blue-600 transition">
          E-commerce Applications
        </h2>

        <p class="text-gray-500 text-sm">
          Complete online store solutions with cart, checkout & payments.
        </p>

        <ul class="text-xs text-gray-600 list-disc pl-4 space-y-1">
          <li>Angular Frontend</li>
          <li>Spring Boot Backend</li>
          <li>Cart & Order System</li>
          <li>Payment Integration</li>
        </ul>

      </div>

    </div>

<!-- ================= FREELANCE PROJECT ================= -->
<div class="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">

  <!-- LEFT CONTENT -->
  <div class="text-center md:text-left">
    <h2 class="text-2xl font-bold text-gray-800">
      🚀 Freelance Project Live
    </h2>
    <p class="text-gray-500 mt-2 text-sm">
      Check out one of my real-world deployed applications built for clients.
    </p>
  </div>

  <!-- RIGHT BUTTON -->
  <a
routerLink="portfolio/live"
    class="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
  >
    View Live Project →
  </a>

</div>



  </div>

</div>

  `,
  imports: [RouterLink]
})

export class Services {

  services = [
    {
      title: 'Full Stack Web Apps',
      desc: 'Angular + Spring Boot applications',
      points: [
        'Angular + Tailwind UI',
        'Spring Boot APIs',
        'JWT Authentication',
        'MySQL / PostgreSQL'
      ]
    },
    {
      title: 'Temple Booking System',
      desc: 'Online booking + token system',
      points: [
        'Spring Boot + Thymeleaf',
        'Payment integration',
        'Token generation',
        'Admin dashboard'
      ]
    },
    {
      title: 'E-commerce Applications',
      desc: 'Complete shopping platform',
      points: [
        'Angular frontend',
        'Cart & checkout',
        'Order system',
        'Payment gateway'
      ]
    }
  ];

}
