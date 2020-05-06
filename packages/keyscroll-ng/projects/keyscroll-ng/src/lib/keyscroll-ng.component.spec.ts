import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyscrollNgComponent } from './keyscroll-ng.component';

describe('KeyscrollNgComponent', () => {
  let component: KeyscrollNgComponent;
  let fixture: ComponentFixture<KeyscrollNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeyscrollNgComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyscrollNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
