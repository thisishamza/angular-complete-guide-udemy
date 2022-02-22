import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assesment3Component } from './assesment3.component';

describe('Assesment3Component', () => {
  let component: Assesment3Component;
  let fixture: ComponentFixture<Assesment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assesment3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assesment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
