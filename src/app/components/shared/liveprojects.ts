import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  description: string;
  liveUrl: string;
  icon: string;
  color: string;
  points: string[];
}

@Component({
  selector: 'app-livepro',
  template: `
<div class="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6 flex justify-center">

  <div class="max-w-7xl w-full flex flex-col gap-14">

    <!-- HEADER -->
    <div class="text-center max-w-2xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
        My Services
      </h1>
      <p class="text-slate-500 mt-4 text-lg leading-relaxed">
        Crafting scalable, high-performance full-stack applications using modern technologies.
      </p>
    </div>

    <!-- GRID -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      <div *ngFor="let service of services"
           class="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col gap-5">

        <!-- TOP BAR -->
        <div class="flex items-center justify-between">

          <!-- ICON -->
          <div class="w-14 h-14 flex items-center justify-center rounded-2xl text-2xl font-semibold shadow-inner"
               [ngClass]="{
                 'bg-indigo-100 text-indigo-600': service.color === 'purple',
                 'bg-emerald-100 text-emerald-600': service.color === 'green',
                 'bg-sky-100 text-sky-600': service.color === 'blue'
               }">
            {{ service.icon }}
          </div>

          <!-- TAG -->
          <span class="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-500">
            Live Project
          </span>

        </div>

        <!-- TITLE -->
        <h2 class="text-xl font-semibold text-slate-800 group-hover:text-indigo-600 transition">
          {{ service.title }}
        </h2>

        <!-- DESC -->
        <p class="text-slate-500 text-sm leading-relaxed">
          {{ service.description }}
        </p>

        <!-- FEATURES -->
        <ul class="text-sm text-slate-600 space-y-2">
          <li *ngFor="let point of service.points" class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            {{ point }}
          </li>
        </ul>

        <!-- BUTTON -->
        <a [href]="service.liveUrl"
           target="_blank"
           class="mt-auto inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
           [ngClass]="{
             'bg-indigo-600 hover:bg-indigo-700': service.color === 'purple',
             'bg-emerald-600 hover:bg-emerald-700': service.color === 'green',
             'bg-sky-600 hover:bg-sky-700': service.color === 'blue'
           }">

          View Live →
        </a>

        <!-- HOVER GLOW -->
        <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
             [ngClass]="{
               'bg-indigo-500/5': service.color === 'purple',
               'bg-emerald-500/5': service.color === 'green',
               'bg-sky-500/5': service.color === 'blue'
             }">
        </div>

      </div>

    </div>

  </div>

</div>
`,
  imports: [CommonModule],

})
export class livepro {

  services: Service[] = [
    {
      title: 'MB Careers',
      description: 'Angular + Express TypeScript application',
      liveUrl: 'https://mb-mbcs-ui.vercel.app/',
      icon: '💻',
      color: 'purple',
      points: [
        'Angular + Tailwind UI',
        'Node.js / TypeScript APIs',
        'Dashboard system',
        'MongoDB'
      ]
    },
    {
      title: 'MB Services',
      description: 'Career services platform',
      liveUrl: 'https://mb-career-services-ui.vercel.app/',
      icon: '🛠️',
      color: 'green',
      points: [
        'Angular frontend',
        'REST APIs',
        'User dashboard',
        'MongoDB'
      ]
    },
    {
      title: 'Behera Institution',
      description: 'Institution management system',
      liveUrl: 'https://mb-career-behara-ui.vercel.app/',
      icon: '🏫',
      color: 'blue',
      points: [
        'Student & course management',
        'Admin dashboard',
        'Responsive Angular UI',
        'Spring Boot backend'
      ]
    },
    {
      title: 'Digital Godavary',
      description: 'A scalable digital platform for managing local services, businesses, and community engagement.',
      liveUrl: 'https://www.digitalgodavary.com',
      icon: '🌐',
      color: 'purple',
      points: [
        'Local business listing & discovery',
        'Dynamic content management system',
        'SEO-optimized responsive UI',
        'High-performance full-stack architecture'
      ]
    }
  ];

}
