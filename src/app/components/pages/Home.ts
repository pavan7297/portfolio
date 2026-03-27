import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { hero } from "../shared/pages/home/hero";
import { AboutUs } from "../shared/pages/about";
import { Services } from "../shared/pages/services";
import { ContactComponent } from "../shared/pages/contactus";

@Component({
  selector: "app-home",
  imports: [CommonModule, hero, AboutUs, Services, ContactComponent],
  template: `
<section>
  <app-hero/>
  <app-about-us />
  <app-services />



  <app-contact />
</section>
  `
})

export class home {



}
