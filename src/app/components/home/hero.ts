import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  template: `
    <section class="h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center p-4 gap-6 bg-mist-200">
      <div class="text-center md:text-left space-y-2 flex flex-col justify-center items-center">
        <div class="flex gap-2">

          <p class="font-semibold text-5xl pt-4 font-swasheds">Hi I'm</p>
       
          <h1 class="text-6xl font-bold tracking-tight font-swashed">
            {{ firstName | uppercase }} {{ lastName | uppercase }}
          </h1>
        </div>

        <div class="p-3">

        <p class="text-2xl font-swasheds">I am <span class="font-sansita text-2xl">{{profession | uppercase}}</span> </p>

        </div>
        
      </div>

      
            <div class="flex items-center justify-center">
        <figure class="relative">
          <img
            src="{{personImgUrl}}"
            alt="personImgAlt ?? 'Person portrait'"
            class="w-[25rem] h-[35rem] "
          />
        </figure>
      </div>
</section>
  `,
  imports: [CommonModule, FormsModule]
})
export class hero {
  firstName: string = 'Pavan';
  lastName: string = 'Srinivas';

  profession: string = 'Web developer';

  personImgUrl = '/assets/pavan.png';
  personImgAlt = 'Portrait of pavan';
}
