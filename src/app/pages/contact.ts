import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { inquiryTypes, profile } from '../data/portfolio';
import { PageHeader } from '../shared/page-header';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, PageHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactPage {
  private readonly fb = inject(FormBuilder);

  protected readonly profile = profile;
  protected readonly inquiryTypes = inquiryTypes;
  protected readonly submitted = signal(false);
  protected readonly prepared = signal(false);

  protected readonly contactMethods = [
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: profile.email,
      url: `mailto:${profile.email}`
    },
    {
      icon: 'fa-brands fa-whatsapp',
      label: 'WhatsApp',
      value: profile.whatsapp,
      url: `https://wa.me/${profile.whatsappNumber}`
    },
    {
      icon: 'fa-brands fa-linkedin-in',
      label: 'LinkedIn',
      value: '/in/pavan-srinivas-malla',
      url: 'https://www.linkedin.com/in/pavan-srinivas-malla/'
    },
    {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      value: '@pavan7297',
      url: 'https://github.com/pavan7297'
    }
  ];

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    company: [''],
    inquiry: ['', Validators.required],
    budget: [''],
    timeline: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  protected hasError(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && (control.touched || this.submitted());
  }

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const text = [
      'New portfolio enquiry',
      '',
      `Name: ${value.name}`,
      `Email: ${value.email}`,
      `Phone: ${value.phone || 'Not provided'}`,
      `Company: ${value.company || 'Not provided'}`,
      `Inquiry: ${value.inquiry}`,
      `Budget: ${value.budget || 'Not provided'}`,
      `Timeline: ${value.timeline || 'Not provided'}`,
      '',
      'Message:',
      value.message
    ].join('\n');

    window.open(
      `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    this.prepared.set(true);
  }
}
