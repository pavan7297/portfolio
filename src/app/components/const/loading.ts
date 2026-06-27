import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading',
    imports: [CommonModule],
    template: `
    <section class="flex h-screen justify-center items-center bg-black gap-3">
      <p class="text-white text-2xl font-semibold">{{ view }}</p>
    </section>
  `,
})
export class Loading implements AfterContentChecked  {
    ngAfterContentChecked(): void {
        this.startCycle();
    }
    /** The strings we want to cycle through */
    readonly data: string[] = ['Portfolio ', 'Of ', 'Pavan Srinivas'];

    /** What the template shows */
    view: string = '';

    // ngOnInit(): void {
    //     this.startCycle();
    // }
    

    /** Show each array element, one second apart */
    private startCycle(): void {
        this.data.forEach((item, index) => {
            // `index * 1000` → 0 s, 1 s, 2 s …
            setTimeout(() => {
                this.view = item;          // <-- update the bound property
                console.log(this.view);    // optional debug output
            }, index * 1000);
        });
    }
}
