import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgvisionComponent } from './sgvision.component';

describe('SgvisionComponent', () => {
  let component: SgvisionComponent;
  let fixture: ComponentFixture<SgvisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgvisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
