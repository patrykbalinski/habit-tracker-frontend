import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitOccurrenceAdderComponent } from './habit-occurrence-adder.component';

describe('HabitOccurrenceAdderComponent', () => {
  let component: HabitOccurrenceAdderComponent;
  let fixture: ComponentFixture<HabitOccurrenceAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitOccurrenceAdderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitOccurrenceAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
