import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNav } from "./components/const/sidenav";
import { footer } from "./components/const/footer";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideNav,
    footer
],
  template: `
    <app-sidenav />

    <router-outlet />
    <app-footer />
  `
})
export class App {

  protected readonly title = signal('portfolio');

}