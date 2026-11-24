import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { skillGroups } from '../data/portfolio';
import { PageHeader } from '../shared/page-header';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsPage {
  protected readonly groups = skillGroups;
  protected readonly totalSkills = skillGroups.reduce((total, group) => total + group.skills.length, 0);

  protected readonly workflow = [
    { icon: 'fa-solid fa-diagram-project', label: 'Architecture & API design' },
    { icon: 'fa-solid fa-code', label: 'Implementation & review' },
    { icon: 'fa-solid fa-vial', label: 'Testing & documentation' },
    { icon: 'fa-solid fa-rocket', label: 'Deployment & monitoring' }
  ];
}
