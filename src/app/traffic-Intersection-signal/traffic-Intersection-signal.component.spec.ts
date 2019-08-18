import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficIntersectionSignalComponent } from './traffic-Intersection-signal.component';

describe('TrafficIntersectionSignalComponent', () => {
  let component: TrafficIntersectionSignalComponent;
  let fixture: ComponentFixture<TrafficIntersectionSignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficIntersectionSignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficIntersectionSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
