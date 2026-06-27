import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;

    technologies: string[];

    client: string;
    year: string;

    active: boolean;
    liveUrl: string;
    github: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">

      <div class="max-w-7xl mx-auto">

        <!-- Heading -->
        <div class="text-center mb-16">

          <p class="uppercase tracking-[6px] text-yellow-400 text-sm">
            Portfolio
          </p>

          <h1 class="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Featured Projects
          </h1>

          <p class="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            A selection of enterprise applications, healthcare systems,
            e-commerce platforms, AI applications, and business websites
            I've developed using modern technologies.
          </p>

        </div>

        <!-- Cards -->
        <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          @for(project of projects; track project.id){

<div
  class="overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-lg">



  <div class="p-6">

    <div class="flex justify-between items-center">

      <span class="text-yellow-400 text-sm">
        {{project.category}}
      </span>

      @if(project.active){

        <span
          class="text-xs bg-green-600 px-3 py-1 rounded-full">
          ● Live
        </span>

      } @else {

        <span
          class="text-xs bg-zinc-700 px-3 py-1 rounded-full">
          Completed
        </span>

      }

    </div>

    <h2 class="mt-4 text-2xl font-bold">
      {{project.title}}
    </h2>

    <p class="mt-4 text-gray-400 leading-7">
      {{project.description}}
    </p>

    <div class="mt-5 text-sm text-gray-500 space-y-1">

      <p>
        <span class="text-white">Client:</span>
        {{project.client}}
      </p>

      <p>
        <span class="text-white">Year:</span>
        {{project.year}}
      </p>

    </div>

    <div class="flex flex-wrap gap-2 mt-5">

      @for(tech of project.technologies; track tech){

        <span
          class="px-3 py-1 rounded-full bg-zinc-800 text-sm">

          {{tech}}

        </span>

      }

    </div>

    <div class="flex gap-3 mt-7">

      @if(project.active){

        <a
          [href]="project.liveUrl"
          target="_blank"
          class="px-5 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">

          Live Project

        </a>

      }

      @if(project.github!=''){

        <a
          [href]="project.github"
          target="_blank"
          class="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10">

          GitHub

        </a>

      }

    </div>

  </div>

</div>

            <!-- </div> -->

          }

        </div>

      </div>

    </section>
  `
})
export class Projects {

    projects: Project[] = [

        {
            id: 1,
            title: '108 Ambulance Medical Web Services',
            category: 'Healthcare',
            description: 'Emergency ambulance management and hospital coordination system.',
            client: 'Procreate techno System pvt ltd',
            year: '2023',
            active: false,
            liveUrl: '',
            github: '',
            technologies: [
                'Spring Boot',
                'Angular',
                'PostgreSQL'
            ]
        },

        // {
        //     id: 2,
        //     title: 'Hospital Management System',
        //     category: 'Healthcare',
        //     description: 'Complete hospital ERP with appointments, billing, laboratory and pharmacy.',
        //     client: 'Private Hospital',
        //     year: '2024',
        //     active: false,
        //     liveUrl: '',
        //     github: '',
        //     technologies: [
        //         'Spring Boot',
        //         'Angular',
        //         'PostgreSQL'
        //     ]
        // },

        {
            id: 3,
            title: 'Festeve E-Commerce',
            category: 'E-Commerce',
            description: 'Online shopping platform with payment gateway and admin dashboard.',
            client: 'Festeve',
            year: '2025',
            active: true,
            liveUrl: 'https://yourwebsite.com',
            github: '',
            technologies: [
                'Spring Boot',
                'Angular',
                'MongoDB'
            ]
        },

        {
            id: 4,
            title: 'MB Career Consultancy',
            category: 'Business Website',
            description: 'Educational consultancy website with responsive design.',
            client: 'MB Career Consultancy',
            year: '2025',
            active: true,
            liveUrl: 'https://mb.pavanoriginals.in',
            github: '',
            technologies: [
                'Angular',
                'Tailwind CSS',
                'Spring Boot'
            ]
        },

        {
            id: 5,
            title: 'Portfolio Website',
            category: 'Portfolio',
            description: 'Personal portfolio showcasing projects and experience.',
            client: 'Self',
            year: '2026',
            active: true,
            liveUrl: 'https://pavanoriginals.in',
            github: 'https://github.com/pavan7297',
            technologies: [
                'Angular',
                'Tailwind CSS',
                'TypeScript'
            ]
        },

        {
            id: 6,
            title: 'AI & MCP Applications',
            category: 'Artificial Intelligence',
            description: 'AI-powered applications using Spring AI, MCP and Ollama.',
            client: 'Personal R&D',
            year: '2026',
            active: false,
            liveUrl: '',
            github: 'https://github.com/pavan7297',
            technologies: [
                'Spring AI',
                'Java',
                'MCP'
            ]
        }

    ];

}