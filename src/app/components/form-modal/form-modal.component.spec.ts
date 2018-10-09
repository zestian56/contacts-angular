import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMOdalComponent } from './form-modal.component';

describe('FormMOdalComponent', () => {
  let component: FormMOdalComponent;
  let fixture: ComponentFixture<FormMOdalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMOdalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMOdalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
