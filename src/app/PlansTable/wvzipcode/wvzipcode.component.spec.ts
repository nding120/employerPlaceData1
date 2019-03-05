import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WVzipcodeComponent } from './wvzipcode.component';

describe('WVzipcodeComponent', () => {
  let component: WVzipcodeComponent;
  let fixture: ComponentFixture<WVzipcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WVzipcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WVzipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
