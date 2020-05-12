import { TestBed } from '@angular/core/testing';

import { ElementAnimateService } from './element-animate.service';

describe('ElementAnimateService', () => {
  let service: ElementAnimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementAnimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
