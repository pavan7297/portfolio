import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
    id: number;
    year: string;
    month: string;
    title: string;
    company: string;
    description: string;
}

@Component({
    selector: 'app-timeline',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">

      <div class="max-w-6xl mx-auto">

        <!-- Heading -->
        <div class="text-center mb-20">

          <p class="uppercase tracking-[6px] text-yellow-400 text-sm">
            Work Experience
          </p>

          <h2 class="text-4xl md:text-5xl font-bold mt-4">
            My Professional Journey
          </h2>

          <p class="text-gray-400 mt-6 max-w-3xl mx-auto">
            From enterprise Java development to freelance full-stack projects,
            every experience has strengthened my expertise in building scalable,
            secure, and user-friendly applications.
          </p>

        </div>

        <!-- Timeline -->
        <div class="relative">

          <!-- Desktop Center Line -->
          <div
            class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400/30 -translate-x-1/2">
          </div>

          @for(item of experience; track item.id){

          <div class="relative flex flex-col lg:flex-row items-center mb-16">

            <!-- Left Side -->
            <div
              class="w-full lg:w-1/2"
              [class.lg:pr-12]="item.id % 2 !== 0"
              [class.lg:pl-12]="item.id % 2 === 0"
              [class.lg:order-1]="item.id % 2 !== 0"
              [class.lg:order-3]="item.id % 2 === 0"
            >

              <div
                class="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300">

                <span
                  class="inline-block px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-semibold">
                  {{ item.month | titlecase }} {{ item.year }}
                </span>

                <h3 class="text-2xl font-bold mt-5">
                  {{ item.title }}
                </h3>

                <p class="text-yellow-400 mt-2 font-medium">
                  {{ item.company }}
                </p>

                <p class="text-gray-400 leading-7 mt-5">
                  {{ item.description }}
                </p>

              </div>

            </div>

            <!-- Timeline Dot -->
            <div
              class="hidden lg:flex order-2 absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-400 border-4 border-black">
            </div>

            <!-- Empty Side -->
            <div
              class="hidden lg:block w-1/2"
              [class.order-3]="item.id % 2 !== 0"
              [class.order-1]="item.id % 2 === 0">
            </div>

          </div>

          }

        </div>

      </div>

    </section>
  `
})
export class Timeline {
    experience: Experience[] = [

        {
            id: 1,
            year: '2022',
            month: 'july',
            title: 'Java Backend Developer',
            company: 'Product Based Company',
            description:
                'Started my career as a Java Backend Developer, developing enterprise applications, RESTful APIs, backend business logic, and database modules using Spring Boot, Java, and PostgreSQL.'
        },

        {
            id: 2,
            year: '2023',
            month: 'march',
            title: 'Healthcare Applications',
            company: '108 Ambulance Medical Services',
            description:
                'Contributed to healthcare applications by developing ambulance management, patient registration, emergency response workflows, hospital coordination, reporting dashboards, and secure backend services.'
        },

        {
            id: 3,
            year: '2023',
            month: 'december',
            title: 'E-Commerce & Business Solutions',
            company: 'festeve',
            description:
                'Designed and developed modern e-commerce and business web applications with responsive user interfaces, secure authentication, product management, and REST API integration.'
        },

        {
            id: 4,
            year: '2024',
            month: 'january',
            title: 'E-Commerce & Business Solutions',
            company: 'festeve',
            description:
                'Enhanced application performance by implementing scalable backend services, improving user experience, and integrating modern frontend technologies with Spring Boot APIs.'
        },

        {
            id: 5,
            year: '2024',
            month: 'december',
            title: 'E-Commerce & Business Solutions',
            company: 'festeve',
            description:
                'Worked on feature enhancements, payment workflows, order management, customer dashboards, and responsive business solutions for multiple client requirements.'
        },

        {
            id: 6,
            year: '2025',
            month: 'january',
            title: 'E-Commerce & Business Solutions',
            company: 'festeve',
            description:
                'Built scalable web applications with Angular and Spring Boot, focusing on REST APIs, authentication, database optimization, and clean application architecture.'
        },

        {
            id: 7,
            year: '2025',
            month: 'september',
            title: 'E-Commerce & Business Solutions',
            company: 'festeve',
            description:
                'Delivered complete web solutions including business portals, responsive websites, admin dashboards, and custom software tailored to client business requirements.'
        },

        {
            id: 8,
            year: '2026 ',
            month: 'january',
            title: 'web developer',
            company: 'mb carers solurtions',
            description:
                'Developed and maintained a responsive educational consultancy website with modern UI/UX, WhatsApp integration, enquiry management, and SEO-friendly design.'
        },

        {
            id: 9,
            year: '2026 ',
            month: 'june',
            title: 'web developer',
            company: 'mb carers solurtions',
            description:
                'Continuing to build modern web applications, AI-powered solutions, and enterprise platforms using Spring Boot, Angular, Spring AI, MCP Server, and cloud-native technologies.'
        }

    ];

}