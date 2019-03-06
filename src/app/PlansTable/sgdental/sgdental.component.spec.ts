import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgdentalComponent } from './sgdental.component';

describe('SgdentalComponent', () => {
  let component: SgdentalComponent;
  let fixture: ComponentFixture<SgdentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgdentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgdentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
