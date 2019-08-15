import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleComposerComponent } from './little-composer.component';

describe('LittleComposerComponent', () => {
  let component: LittleComposerComponent;
  let fixture: ComponentFixture<LittleComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
