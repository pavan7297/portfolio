import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { processSteps, services } from '../data/portfolio';
import { PageHeader } from '../shared/page-header';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesPage {
  protected readonly services = services;
  protected readonly steps = processSteps;
}
