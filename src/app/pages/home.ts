import { Component } from "@angular/core";
import { hero } from "../components/home/hero";
import { hero2 } from "../components/home/hero2";
import { Timeline } from "../components/const/timeline";
import { contact } from "../components/contact";
import { about } from "../components/about";

@Component({
    selector: 'app-home',
    imports: [hero2, Timeline],
    template: `

    <!-- <app-hero /> -->
     <app-hero2 />
     <app-timeline />
     <!-- <app-about />
     <app-contact/> -->
    `
})

export class home {

}