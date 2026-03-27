import { Routes } from '@angular/router';
import { home } from './components/pages/Home';
import { Err404 } from './components/shared/error/err404/err404';
import { livepro } from './components/shared/liveprojects';
import { ContactComponent } from './components/shared/pages/contactus';
import { ExperienceComponent } from './components/shared/pages/experence/expereience';

export const routes: Routes = [
  { path: '', component: home },
    { path: 'portfolio/live', component: livepro },
    { path: 'experience', component: ExperienceComponent },
    { path: 'contact', component: ContactComponent },


  // error pages
  { path: "error-404", component: Err404 },
  { path: '**', redirectTo: "error-404" }
];
