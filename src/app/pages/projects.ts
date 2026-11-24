import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../data/portfolio';
import { PageHeader } from '../shared/page-header';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsPage {
  protected readonly allProjects = projects;
  protected readonly categories = ['All', ...new Set(projects.map((project) => project.category))];
  protected readonly activeCategory = signal('All');

  protected readonly visibleProjects = computed(() => {
    const category = this.activeCategory();
    return category === 'All'
      ? this.allProjects
      : this.allProjects.filter((project) => project.category === category);
  });

  protected readonly liveProjects = computed(() => this.allProjects.filter((project) => project.liveUrl));

  protected selectCategory(category: string): void {
    this.activeCategory.set(category);
  }
}
