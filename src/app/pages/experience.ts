import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { experiences } from '../data/portfolio';
import { PageHeader } from '../shared/page-header';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperiencePage {
  protected readonly roles = experiences;
  protected readonly totalRoles = experiences.length;
  protected readonly totalCompanies = new Set(experiences.map((role) => role.company)).size;
  protected readonly currentRole = experiences.find((role) => role.current);
}
