import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReactiveComponent } from './sample-reactive.component';

describe('SampleReactiveComponent', () => {
  let component: SampleReactiveComponent;
  let fixture: ComponentFixture<SampleReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
