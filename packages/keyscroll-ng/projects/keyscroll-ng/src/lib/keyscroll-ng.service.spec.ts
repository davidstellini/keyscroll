import { TestBed } from '@angular/core/testing';

import { KeyscrollNgService } from './keyscroll-ng.service';

describe('KeyscrollNgService', () => {
  let service: KeyscrollNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyscrollNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
