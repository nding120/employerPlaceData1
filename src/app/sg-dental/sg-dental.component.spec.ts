import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgDentalComponent } from './sg-dental.component';

describe('SgDentalComponent', () => {
  let component: SgDentalComponent;
  let fixture: ComponentFixture<SgDentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgDentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgDentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
