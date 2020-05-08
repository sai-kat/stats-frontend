import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsShowComponent } from './stats-show.component';

describe('StatsShowComponent', () => {
  let component: StatsShowComponent;
  let fixture: ComponentFixture<StatsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
