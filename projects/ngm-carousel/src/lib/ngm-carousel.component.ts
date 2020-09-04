import { Component, OnInit, ViewChild, AfterViewInit, Input,
  ViewContainerRef, TemplateRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'ngm-carousel',
  templateUrl: './ngm-carousel.component.html',
  styleUrls: ['./ngm-carousel.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideTransition', [
      state('normal', style({transform: 'translate3d({{slideLeft}}%, 0, 0)'}), { params: { slideLeft: 0} }),
      state('slide2', style({transform: 'translate3d(-87%, 0, 0)'})),
      state('slide3', style({transform: 'translate3d(-177.5%, 0, 0)'})),
      state('slide4', style({transform: 'translate3d(-268.5%, 0, 0)'})),
      state('reset3', style({transform: 'translate3d(-177.5%, 0, 0)'})),
      state('fast2', style({transform: 'translate3d(-87%, 0, 0)'})),
      state('fast4', style({transform: 'translate3d(-270%, 0, 0)'})),
      transition('normal=>slide2', animate('0.6s ease-out')),
      transition('normal=>slide3', animate('0.6s ease-out')),
      transition('normal=>slide4', animate('0.6s ease-out')),
      transition('*=>fast2', animate('0.1s')),
      transition('*=>fast4', animate('0.1s')),
      transition('*=>reset3', animate('0s')),
      transition('*=>normal', animate('0s'))
    ])
  ]
})
export class NgmCarouselComponent implements OnInit {
  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;
  @Input() dataSource: any[];
  @Input() showButtons = true;
  @Input() mainClassName = '';
  @Input() buttonsClassName = '';
  @Input() slideTemplate: TemplateRef<any>;
  @Output() slideChanging = new EventEmitter<any>();
  @Output() slideChanged = new EventEmitter<any>();

  slide2Position = { pos: -87, state: 'slide2' };
  slide3Position = { pos: -177.5, state: 'slide3' };
  slide4Position = { pos: -270, state: 'slide4' };

  isDown = false;
  startX = 0;
  lastDelta = 0;
  originalLeft = this.slide3Position.pos;
  currentLeft = this.slide3Position.pos;
  animatedSlideState = 'reset3';
  slides = [null, null, null, null, null];
  buttons = [];
  buttonSearch = -1;

  constructor( ) { }

  ngOnInit() {
    this.processDataSource(0);
  }

  processDataSource(centerIx: number) {
    console.log(centerIx);
    const ds = (this.dataSource ? this.dataSource : []).slice();

    if (centerIx >= ds.length) {
      centerIx = 0;
    }

    if (centerIx < 0) {
      centerIx = ds.length - 1;
    }

    this.slideChanged.emit(this.dataSource[centerIx]);

    if (ds.length === 0) {
      this.slides = [1, 2, 3, 4, 5].map(x => ({ item: null, dix: -1}));
      return;
    }

    this.buttons = this.dataSource.map((v, i) => ({
      selected: i === centerIx,
      dix: i
    }));

    if (ds.length === 1) {
      this.slides = [1, 2, 3, 4, 5].map(x => ({ item: ds[0], dix: 0}));
      return;
    }

    if (ds.length === 2) {
      const anotherIx = centerIx === 0 ? 1 : 0;
      this.slides[0] = { item: ds[centerIx], dix: centerIx };
      this.slides[1] = { item: ds[anotherIx], dix: anotherIx };
      this.slides[2] = { item: ds[centerIx], dix: centerIx };
      this.slides[3] = { item: ds[anotherIx], dix: anotherIx };
      this.slides[4] = { item: ds[centerIx], dix: centerIx };
      return;
    }

    if (ds.length >= 3) {
      let minusMinusIx = centerIx - 2;
      let minusIx = centerIx - 1;
      let plusIx = centerIx + 1;
      let plusPlusIx = centerIx + 2;

      if (minusIx < 0) {
        minusIx = ds.length - 1;
        minusMinusIx = ds.length - 2;
      }

      if (minusMinusIx < 0) {
        minusMinusIx = ds.length - 1;
      }

      if (plusIx >= ds.length) {
        plusIx = 0;
        plusPlusIx = 1;
      }

      if (plusPlusIx >= ds.length) {
        plusPlusIx = 0;
      }

      this.slides[0] = { item: ds[minusMinusIx], dix: minusMinusIx };
      this.slides[1] = { item: ds[minusIx], dix: minusIx };
      this.slides[2] = { item: ds[centerIx], dix: centerIx };
      this.slides[3] = { item: ds[plusIx], dix: plusIx };
      this.slides[4] = { item: ds[plusPlusIx], dix: plusPlusIx };
    }
  }

  slider_mousedown(event: MouseEvent) {
    this.slider_start(event.pageX);
  }

  slider_mouseleave(event) {
    this.slider_end();
  }

  slider_mouseup(event) {
    this.slider_end();
  }

  slider_mousemove(event: MouseEvent) {
    this.slider_move(event.pageX);
  }

  slider_touchstart(event: TouchEvent) {
    this.slider_start(event.touches[0].screenX);
  }

  slider_touchend(event: TouchEvent) {
    this.slider_end();
  }

  slider_touchmove(event: TouchEvent) {
    this.slider_move(event.touches[0].screenX);
  }

  slider_start(pageX: number) {
    if (this.animatedSlideState != 'reset3' && this.animatedSlideState != 'normal') {
      return;
    }
    this.isDown = true;
    this.startX = pageX;
    this.lastDelta = 0;
    this.animatedSlideState = 'normal';
  }

  slider_end() {
    if (!this.isDown) {
      return;
    }
    if (this.lastDelta > 0) {
      this.slideChanging.emit(this.getDataSourceItem(this.slides[2].dix - 1));
    } else {
      this.slideChanging.emit(this.getDataSourceItem(this.slides[2].dix + 1));
    }
    this.isDown = false;
    this.originalLeft = this.currentLeft;
    this.slider_animate_start();
  }

  getDataSourceItem(dix: number){
    if (dix < 0) { dix = 0; }
    if (dix >= this.dataSource.length) {
      dix = this.dataSource.length - 1;
    }
    return this.dataSource[dix];
  }

  slider_move(pageX: number) {
    if (!this.isDown) {
      return;
    }
    this.lastDelta = pageX - this.startX;
    const percent = (this.lastDelta / this.container.element.nativeElement.offsetWidth) * 100;
    this.currentLeft = Math.round(this.originalLeft + percent);
  }
  slider_animate_start() {

    if (this.lastDelta === 0) {
      this.lastDelta = (this.startX < (this.container.element.nativeElement.offsetWidth / 2)) ? 1 : -1;
    }

    if (this.lastDelta > 0) {
      this.animatedSlideState = this.slide2Position.state;
    } else {
      this.animatedSlideState = this.slide4Position.state;
    }
  }

  slider_animate_end() {
    console.log('END: ' + this.animatedSlideState);

    if (this.buttonSearch >= 0 && this.animatedSlideState === 'reset3') {
      if (this.buttonSearch === this.slides[2].dix) {
        this.buttonSearch = -1;
      } else if (this.buttonSearch > this.slides[2].dix) {
        this.animatedSlideState = 'fast4';
      } else {
        this.animatedSlideState = 'fast2';
      }
      return;
    }

    if (this.animatedSlideState === 'reset3' || this.animatedSlideState === 'normal') {
      return;
    }

    if (this.buttonSearch < 0) {
      if (this.lastDelta > 0) {
        this.processDataSource(this.slides[2].dix - 1);
      } else {
        this.processDataSource(this.slides[2].dix + 1);
      }
    } else {
      if (this.buttonSearch > this.slides[2].dix) {
        this.processDataSource(this.slides[2].dix + 1);
      } else {
        this.processDataSource(this.slides[2].dix - 1);
      }
    }

    this.currentLeft = this.slide3Position.pos;
    this.originalLeft =  this.currentLeft;
    this.animatedSlideState = 'reset3';
  }

  selectSlide(dix: number) {
    if (dix === this.slides[2].dix) {
      return;
    }
    this.slideChanging.emit(this.dataSource[dix]);
    this.buttonSearch = dix;
    if (this.buttonSearch > this.slides[2].dix) {
      this.animatedSlideState = 'fast4';
    } else {
      this.animatedSlideState = 'fast2';
    }
  }
}
