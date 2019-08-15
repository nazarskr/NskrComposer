import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerAppComponent } from './freelancer-app.component';

describe('FreelancerAppComponent', () => {
  let component: FreelancerAppComponent;
  let fixture: ComponentFixture<FreelancerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
