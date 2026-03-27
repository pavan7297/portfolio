import { Component } from "@angular/core";

@Component({
  selector: "app-headers",
  template: ``,
  imports: []
})

export class Headers {

  nav: Header[] = [
    {
      id: 1,
      title: "Home",
      routerTo: "/"
    },
        {
      id: 2,
      title: "Services",
      routerTo: "services"
    },  {
      id: 3,
      title: "Contact Us",
      routerTo: "contact-us"
    },  {
      id: 4,
      title: "About Us",
      routerTo: "about-us"
    }
  ]

}
interface Header {
  id?: number;
  title?: string;
  routerTo?: string;
}
