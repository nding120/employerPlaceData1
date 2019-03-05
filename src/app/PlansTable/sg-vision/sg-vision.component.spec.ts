import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgVisionComponent } from './sg-vision.component';

describe('SgVisionComponent', () => {
  let component: SgVisionComponent;
  let fixture: ComponentFixture<SgVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
