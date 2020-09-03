import { TestBed } from '@angular/core/testing';

import { NgmCarouselService } from './ngm-carousel.service';

describe('NgmCarouselService', () => {
  let service: NgmCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgmCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
