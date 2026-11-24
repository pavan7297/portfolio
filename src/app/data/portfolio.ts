/**
 * Single source of truth for the portfolio content.
 *
 * Content is based on the public LinkedIn profile
 * https://www.linkedin.com/in/pavan-srinivas-malla/ (via indexed public snippets),
 * the existing portfolio content and the resume skills inventory.
 */

export interface SocialLink {
  readonly label: string;
  readonly icon: string;
  readonly url: string;
  readonly handle: string;
}

export interface Profile {
  readonly name: string;
  readonly shortName: string;
  readonly headline: string;
  readonly tagline: string;
  readonly summary: readonly string[];
  readonly location: string;
  readonly experience: string;
  readonly email: string;
  readonly whatsapp: string;
  readonly whatsappNumber: string;
  readonly availability: string;
  readonly socials: readonly SocialLink[];
  readonly stats: readonly { readonly value: string; readonly label: string }[];
}

export interface Experience {
  readonly id: number;
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly location: string;
  readonly current: boolean;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
}

export interface Project {
  readonly id: number;
  readonly title: string;
  readonly category: string;
  readonly icon: string;
  readonly year: string;
  readonly client: string;
  readonly status: 'live' | 'completed';
  readonly description: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
  readonly liveUrl?: string;
  readonly codeUrl?: string;
}

export interface SkillGroup {
  readonly id: number;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
  readonly skills: readonly { readonly name: string; readonly level: number }[];
}

export interface Service {
  readonly id: number;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
  readonly deliverables: readonly string[];
  readonly stack: readonly string[];
}

export const profile: Profile = {
  name: 'Malla Pavan Srinivas',
  shortName: 'Pavan Srinivas',
  headline: 'Java Backend & Full Stack Developer',
  tagline:
    'Java Backend Developer | Full Stack Developer | Angular Developer | Spring Boot | Building Scalable and Efficient Applications',
  summary: [
    'I am a passionate and results-driven Full Stack Developer with hands-on experience building robust, scalable applications. My expertise lies in Java, Spring Boot and Angular, with a strong focus on delivering impactful solutions.',
    'I design clean backend services and REST APIs, build responsive Angular interfaces, and connect them through clear API contracts. I enjoy solving real business problems with practical engineering, whether that is healthcare software, e-commerce platforms, business portals or internal tools.',
    'Currently based in Hyderabad and open to new opportunities, I care about maintainable architecture, readable code and performance that users can actually feel.'
  ],
  location: 'Hyderabad, Telangana, India',
  experience: '3 years 8 months',
  email: 'mallapavansrinivas@gmail.com',
  whatsapp: '+91 95022 14310',
  whatsappNumber: '919502214310',
  availability: 'Immediate joiner · Open to new opportunities',
  socials: [
    {
      label: 'LinkedIn',
      icon: 'fa-brands fa-linkedin-in',
      url: 'https://www.linkedin.com/in/pavan-srinivas-malla/',
      handle: '/in/pavan-srinivas-malla'
    },
    {
      label: 'GitHub',
      icon: 'fa-brands fa-github',
      url: 'https://github.com/pavan7297',
      handle: '@pavan7297'
    },
    {
      label: 'Email',
      icon: 'fa-solid fa-envelope',
      url: 'mailto:mallapavansrinivas@gmail.com',
      handle: 'mallapavansrinivas@gmail.com'
    },
    {
      label: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp',
      url: 'https://wa.me/919502214310',
      handle: '+91 95022 14310'
    }
  ],
  stats: [
    { value: '3.8+', label: 'Years experience' },
    { value: '5', label: 'Projects delivered' },
    { value: '4', label: 'Technology domains' },
    { value: '100%', label: 'Client focus' }
  ]
};

export const experiences: readonly Experience[] = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Tech Trident',
    period: 'Apr 2026 – Present',
    location: 'Hyderabad, India',
    current: true,
    description:
      'Building and maintaining scalable Java services and Angular interfaces for client-facing products, with an emphasis on clean architecture and reliable delivery.',
    highlights: [
      'Design and develop backend modules with Java and Spring Boot.',
      'Integrate REST APIs with responsive Angular frontends.',
      'Improve performance and reliability through refactoring and cleaner API boundaries.'
    ],
    stack: ['Java', 'Spring Boot', 'Angular']
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'MB Career Solutions',
    period: 'Jan 2026 – Jun 2026',
    location: 'Hyderabad, India',
    current: false,
    description:
      'Developed responsive education and career consultancy websites with modern UI, enquiry handling and SEO-friendly structure.',
    highlights: [
      'Built responsive Angular interfaces with Tailwind CSS.',
      'Added enquiry, WhatsApp and dashboard workflows.',
      'Collaborated directly with stakeholders on requirements and delivery.'
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'MB Career Solutions',
    period: 'Jan 2026 – Jun 2026',
    location: 'Hyderabad, India',
    current: false,
    description:
      'Worked across the stack on business platforms, connecting Spring Boot services to Angular clients through clear API contracts.',
    highlights: [
      'Implemented REST endpoints and business logic with Spring Boot.',
      'Built reusable service layers and request/response DTOs.',
      'Supported deployment and environment configuration.'
    ],
    stack: ['Java', 'Spring Boot', 'Angular']
  },
  {
    id: 4,
    role: 'Software Engineer',
    company: 'FestEve',
    period: 'Feb 2024 – Sep 2025',
    location: 'India',
    current: false,
    description:
      'Delivered e-commerce and business web applications end to end, from backend APIs through to polished user interfaces.',
    highlights: [
      'Built product, order and payment workflows for e-commerce platforms.',
      'Developed Angular admin dashboards and customer-facing pages.',
      'Tuned queries and API responses for faster page loads.'
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'REST APIs']
  },
  {
    id: 5,
    role: 'Associate Software Engineer',
    company: 'FestEve',
    period: 'May 2023 – Feb 2024',
    location: 'India',
    current: false,
    description:
      'Started contributing to production features at FestEve, growing from focused tasks to owning complete modules.',
    highlights: [
      'Implemented reusable UI components in Angular.',
      'Wrote and consumed REST APIs with Spring Boot.',
      'Fixed defects and improved existing application workflows.'
    ],
    stack: ['Angular', 'Java', 'Spring Boot']
  },
  {
    id: 6,
    role: 'Associate Developer (Angular | Spring Boot)',
    company: 'Procreate Techno System',
    period: 'Jul 2022 – Mar 2023',
    location: 'India',
    current: false,
    description:
      'Began my professional journey building enterprise and healthcare applications, learning the fundamentals of production-grade full stack development.',
    highlights: [
      'Contributed to 108 Ambulance medical web services.',
      'Built backend logic with Java and Spring Boot.',
      'Created Angular screens and integrated them with REST endpoints.'
    ],
    stack: ['Java', 'Spring Boot', 'Angular']
  }
];

export const projects: readonly Project[] = [
  {
    id: 1,
    title: '108 Ambulance Medical Web Services',
    category: 'Healthcare',
    icon: 'fa-solid fa-truck-medical',
    year: '2023',
    client: 'Procreate Techno System',
    status: 'completed',
    description:
      'Emergency ambulance management and hospital coordination system built to streamline patient registration, dispatch and reporting.',
    highlights: [
      'Ambulance booking, dispatch and hospital coordination workflows',
      'Secure backend services with role-based access',
      'Reporting dashboards for operational visibility'
    ],
    technologies: ['Spring Boot', 'Java', 'Angular']
  },
  {
    id: 2,
    title: 'FestEve E-Commerce Platform',
    category: 'E-Commerce',
    icon: 'fa-solid fa-cart-shopping',
    year: '2025',
    client: 'FestEve',
    status: 'live',
    description:
      'Online shopping platform with catalog management, cart, checkout, payment integration and a dedicated admin dashboard.',
    highlights: [
      'Product catalog, cart, order and payment flows',
      'Angular storefront and admin dashboard',
      'REST APIs backed by Spring Boot'
    ],
    technologies: ['Spring Boot', 'Angular', 'REST APIs']
  },
  {
    id: 3,
    title: 'MB Career Consultancy',
    category: 'Business Website',
    icon: 'fa-solid fa-briefcase',
    year: '2025',
    client: 'MB Career Solutions',
    status: 'live',
    description:
      'Responsive consultancy website with service pages, enquiry handling and WhatsApp integration for student recruitment.',
    highlights: [
      'SEO-friendly responsive Angular UI',
      'Enquiry capture and WhatsApp handoff',
      'Content and service management workflows'
    ],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Spring Boot'],
    liveUrl: 'https://mb.pavanoriginals.in/'
  },
  {
    id: 4,
    title: 'Digital Godavary',
    category: 'Business Website',
    icon: 'fa-solid fa-globe',
    year: '2025',
    client: 'Digital Godavary',
    status: 'live',
    description:
      'A scalable digital platform for local services, business listings and community engagement with a fast, SEO-optimized interface.',
    highlights: [
      'Local business listing and discovery',
      'Dynamic content management system',
      'High-performance full stack architecture'
    ],
    technologies: ['Angular', 'Spring Boot', 'Tailwind CSS'],
    liveUrl: 'https://www.digitalgodavary.com/'
  },
  {
    id: 5,
    title: 'MB Careers',
    category: 'Web Application',
    icon: 'fa-solid fa-user-graduate',
    year: '2025',
    client: 'MB Career Solutions',
    status: 'live',
    description:
      'Career services application with dashboards, applicant workflows and TypeScript APIs.',
    highlights: [
      'Angular + TypeScript dashboard interface',
      'Node.js / TypeScript API layer',
      'Applicant and service management flows'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js'],
    liveUrl: 'https://mb-mbcs-ui.vercel.app/'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Portfolio',
    icon: 'fa-solid fa-user-astronaut',
    year: '2026',
    client: 'Self',
    status: 'live',
    description:
      'Personal portfolio showcasing projects, experience and skills with an interactive 3D experience.',
    highlights: [
      'Interactive Three.js scene engine',
      'Lazy-loaded standalone Angular pages',
      'Accessible, responsive design'
    ],
    technologies: ['Angular', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    liveUrl: 'https://pavanoriginals.in/',
    codeUrl: 'https://github.com/pavan7297'
  }
];

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 1,
    title: 'Languages',
    icon: 'fa-solid fa-code',
    description: 'The core languages I write and reason in every day.',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 85 }
    ]
  },
  {
    id: 2,
    title: 'Backend & APIs',
    icon: 'fa-solid fa-server',
    description: 'Building services that are easy to maintain and scale.',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring MVC', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'Microservices', level: 75 },
      { name: 'WebSocket', level: 75 },
      { name: 'RabbitMQ', level: 70 },
      { name: 'Spring Security / JWT', level: 72 }
    ]
  },
  {
    id: 3,
    title: 'Frontend',
    icon: 'fa-solid fa-palette',
    description: 'Turning requirements into fast, accessible interfaces.',
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'RxJS & Signals', level: 80 }
    ]
  },
  {
    id: 4,
    title: 'Tools & Practices',
    icon: 'fa-solid fa-screwdriver-wrench',
    description: 'The workflow around the code matters just as much.',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Maven', level: 82 },
      { name: 'Swagger / OpenAPI', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Testing & code review', level: 78 }
    ]
  }
];

export const services: readonly Service[] = [
  {
    id: 1,
    title: 'Full Stack Web Applications',
    icon: 'fa-solid fa-layer-group',
    description:
      'End-to-end product development, from REST APIs to a polished, responsive user interface.',
    deliverables: [
      'Angular SPA with reusable components',
      'Spring Boot REST API layer',
      'Reusable service layers and DTOs',
      'Authentication and role-based access'
    ],
    stack: ['Angular', 'Spring Boot', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'Java Backend & REST APIs',
    icon: 'fa-solid fa-gears',
    description:
      'Well-structured backend services with clean boundaries, predictable behaviour and room to grow.',
    deliverables: [
      'REST API design and implementation',
      'Spring MVC and reusable service layers',
      'Validation, error handling and logging',
      'Swagger / OpenAPI documentation'
    ],
    stack: ['Java', 'Spring Boot', 'Spring MVC', 'Swagger']
  },
  {
    id: 3,
    title: 'Angular Frontend Development',
    icon: 'fa-solid fa-window-maximize',
    description:
      'Fast, accessible single-page applications built with standalone components, signals and reactive forms.',
    deliverables: [
      'Standalone component architecture',
      'Signals-based state management',
      'Reactive forms and validation',
      'Responsive, accessible layouts'
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS']
  },
  {
    id: 4,
    title: 'Real-Time & Messaging',
    icon: 'fa-solid fa-bolt',
    description:
      'Event-driven features and live updates where users expect information immediately.',
    deliverables: [
      'WebSocket-based live updates',
      'RabbitMQ event producers and consumers',
      'Asynchronous processing flows',
      'Resilient retry and error handling'
    ],
    stack: ['WebSocket', 'RabbitMQ', 'Java', 'Spring Boot']
  }
];

export const processSteps: readonly {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}[] = [
  {
    id: 1,
    title: 'Discover',
    description: 'Understand the problem, users, constraints and success criteria before writing code.',
    icon: 'fa-solid fa-magnifying-glass'
  },
  {
    id: 2,
    title: 'Design',
    description: 'Shape the API contracts and interface structure with clarity.',
    icon: 'fa-solid fa-diagram-project'
  },
  {
    id: 3,
    title: 'Build',
    description: 'Deliver in small, reviewable increments with tests and documentation along the way.',
    icon: 'fa-solid fa-hammer'
  },
  {
    id: 4,
    title: 'Ship & Improve',
    description: 'Deploy, measure real usage and refine based on feedback and performance data.',
    icon: 'fa-solid fa-rocket'
  }
];

export const inquiryTypes: readonly string[] = [
  'Full-time opportunity',
  'Freelance project',
  'Contract work',
  'Website development',
  'Spring Boot API development',
  'Angular development',
  'Technical consultation',
  'Other'
];
