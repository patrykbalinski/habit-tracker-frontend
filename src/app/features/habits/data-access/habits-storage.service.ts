import { inject, Injectable } from '@angular/core';
import { ApiHabitsService } from "@habits/data-access/api-habits.service";
import { BehaviorSubject, finalize, Subject } from "rxjs";
import { Habit } from "@habits/interfaces/habit";

@Injectable({
  providedIn: 'root'
})
export class HabitsStorageService {

  private apiHabits: ApiHabitsService = inject(ApiHabitsService);

  public readonly habits$: BehaviorSubject<Habit[]> = new BehaviorSubject<Habit[]>([]);
  public readonly habitLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly habitSuccess$: Subject<boolean> = new Subject<boolean>();

  public getHabits(): void {
    this.habitLoading$.next(true);
    this.apiHabits.getHabits()
      .pipe(finalize(() => this.habitLoading$.next(false)))
      .subscribe({
        next: (habits: Habit[]) => {
          this.habits$.next(habits);
          this.habitSuccess$.next(true);
        },
        error: () => this.habitSuccess$.next(false)
    })
  }

  public getHabitName(habitId: Habit['id']): Habit['name'] {
    return this.habits$.value.find((habit: Habit) => habit.id === habitId)?.name;
  }
}
