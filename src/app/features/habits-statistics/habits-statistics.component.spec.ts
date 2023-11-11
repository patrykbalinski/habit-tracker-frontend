import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsStatisticsComponent } from './habits-statistics.component';

describe('HabitsStatisticsComponent', () => {
  let component: HabitsStatisticsComponent;
  let fixture: ComponentFixture<HabitsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitsStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
