import { NgModule } from '@angular/core';
import { NgmCarouselComponent } from './ngm-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [NgmCarouselComponent],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [NgmCarouselComponent]
})
export class NgmCarouselModule { }
