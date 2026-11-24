import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../data/portfolio';
import { PageHeader } from '../shared/page-header';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink, PageHeader],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutPage {
  protected readonly profile = profile;

  protected readonly facts = [
    { label: 'Based in', value: 'Rajahmundry, India', icon: 'fa-solid fa-location-dot' },
    { label: 'Experience', value: this.profile.experience, icon: 'fa-solid fa-clock' },
    { label: 'Availability', value: 'Immediate joiner', icon: 'fa-solid fa-bolt' },
    { label: 'Focus', value: 'Java full stack', icon: 'fa-solid fa-crosshairs' }
  ];

  protected readonly principles = [
    {
      icon: 'fa-solid fa-bullseye',
      title: 'Solve the real problem',
      copy: 'Understand the business goal before choosing a technology or writing a line of code.'
    },
    {
      icon: 'fa-solid fa-puzzle-piece',
      title: 'Keep it maintainable',
      copy: 'Small, focused pieces with clear contracts make software easier to change tomorrow.'
    },
    {
      icon: 'fa-solid fa-gauge-high',
      title: 'Respect performance',
      copy: 'Fast endpoints, lean payloads and thoughtful rendering are features users notice.'
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Work in the open',
      copy: 'Clear communication with product, design and QA turns good ideas into great releases.'
    }
  ];
}
