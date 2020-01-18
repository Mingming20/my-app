import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTemplateDrivenComponent } from './sample-template-driven.component';

describe('SampleTemplateDrivenComponent', () => {
  let component: SampleTemplateDrivenComponent;
  let fixture: ComponentFixture<SampleTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
