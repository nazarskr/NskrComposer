import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSoftwareComponent } from './admin-software.component';

describe('AdminSoftwareComponent', () => {
  let component: AdminSoftwareComponent;
  let fixture: ComponentFixture<AdminSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
