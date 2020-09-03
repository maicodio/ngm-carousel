import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmCarouselComponent } from './ngm-carousel.component';

describe('NgmCarouselComponent', () => {
  let component: NgmCarouselComponent;
  let fixture: ComponentFixture<NgmCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
