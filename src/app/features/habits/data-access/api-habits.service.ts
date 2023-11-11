import { Injectable } from '@angular/core';
import { delay, Observable, of } from "rxjs";
import { Habit } from "@habits/interfaces/habit";

@Injectable()
export class ApiHabitsService {

  public getHabits(): Observable<Habit[]> {
    return of(HABITS).pipe(delay(500));
  }
}

export const HABITS: Habit[] = [
  { id: 1, name: 'work', hours: 32 },
  { id: 2, name: 'play', hours: 16 },
  { id: 3, name: 'workout', hours: 4 }
]
