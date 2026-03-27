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
  template: `<div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center">

  <div class="max-w-6xl w-full flex flex-col gap-12">

    <!-- HEADER -->
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        My Services
      </h1>
      <p class="text-gray-600 mt-3">
        Building scalable full-stack applications with modern technologies
      </p>
    </div>

    <!-- SERVICES GRID -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div *ngFor="let service of services"
           class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition flex flex-col gap-4 border border-gray-100">

        <!-- ICON -->
        <div class="w-12 h-12 flex items-center justify-center rounded-xl text-xl"
             [ngClass]="{
               'bg-purple-100 text-purple-600': service.color === 'purple',
               'bg-green-100 text-green-600': service.color === 'green',
               'bg-blue-100 text-blue-600': service.color === 'blue'
             }">
          {{ service.icon }}
        </div>

        <!-- TITLE -->
        <h2 class="text-xl font-semibold">
          {{ service.title }}
        </h2>

        <!-- DESC -->
        <p class="text-gray-500 text-sm">
          {{ service.description }}
        </p>

        <!-- POINTS -->
        <ul class="text-xs text-gray-600 list-disc pl-4 space-y-1">
          <li *ngFor="let point of service.points">
            {{ point }}
          </li>
        </ul>

        <!-- BUTTON -->
        <a [href]="service.liveUrl"
           target="_blank"
           class="mt-auto text-center py-2 rounded-lg text-white transition"
           [ngClass]="{
             'bg-purple-600 hover:bg-purple-700': service.color === 'purple',
             'bg-green-600 hover:bg-green-700': service.color === 'green',
             'bg-blue-600 hover:bg-blue-700': service.color === 'blue'
           }">

          View Live

        </a>

      </div>

    </div>

  </div>

</div>`,
  imports: [CommonModule, RouterLink],

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
    }
  ];

}
