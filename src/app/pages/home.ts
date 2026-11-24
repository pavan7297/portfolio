import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { experiences, profile, projects } from '../data/portfolio';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {
  protected readonly profile = profile;
  protected readonly featuredProjects = projects.slice(0, 3);
  protected readonly recentRoles = experiences.slice(0, 3);
  protected readonly highlights = [
    {
      icon: 'fa-solid fa-server',
      title: 'Backend that scales',
      copy: 'Java and Spring Boot services with clean boundaries, thoughtful APIs and reliable integrations.',
      tone: 'amber'
    },
    {
      icon: 'fa-solid fa-palette',
      title: 'Interfaces that feel right',
      copy: 'Angular applications with responsive layouts, accessible components and fast interactions.',
      tone: 'cyan'
    }
  ];
}
