import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Pavan Srinivas — Java Full Stack Developer',
    loadComponent: () => import('./pages/home').then((m) => m.HomePage)
  },
  {
    path: 'about',
    title: 'About — Pavan Srinivas',
    loadComponent: () => import('./pages/about').then((m) => m.AboutPage)
  },
  {
    path: 'experience',
    title: 'Experience — Pavan Srinivas',
    loadComponent: () => import('./pages/experience').then((m) => m.ExperiencePage)
  },
  {
    path: 'skills',
    title: 'Skills — Pavan Srinivas',
    loadComponent: () => import('./pages/skills').then((m) => m.SkillsPage)
  },
  {
    path: 'projects',
    title: 'Projects — Pavan Srinivas',
    loadComponent: () => import('./pages/projects').then((m) => m.ProjectsPage)
  },
  {
    path: 'services',
    title: 'Services — Pavan Srinivas',
    loadComponent: () => import('./pages/services').then((m) => m.ServicesPage)
  },
  {
    path: 'contact',
    title: 'Contact — Pavan Srinivas',
    loadComponent: () => import('./pages/contact').then((m) => m.ContactPage)
  },
  {
    path: '**',
    title: 'Page not found — Pavan Srinivas',
    loadComponent: () => import('./pages/not-found').then((m) => m.NotFoundPage)
  }
];
