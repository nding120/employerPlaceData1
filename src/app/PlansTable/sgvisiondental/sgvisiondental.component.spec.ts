import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgvisiondentalComponent } from './sgvisiondental.component';

describe('SgvisiondentalComponent', () => {
  let component: SgvisiondentalComponent;
  let fixture: ComponentFixture<SgvisiondentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgvisiondentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgvisiondentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
