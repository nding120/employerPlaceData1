import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgVnDComponent } from './sg-vn-d.component';

describe('SgVnDComponent', () => {
  let component: SgVnDComponent;
  let fixture: ComponentFixture<SgVnDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgVnDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgVnDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
