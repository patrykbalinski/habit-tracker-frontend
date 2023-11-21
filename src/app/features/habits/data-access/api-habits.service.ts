import { Injectable } from '@angular/core';
import { delay, Observable, of } from "rxjs";
import { Habit } from "@habits/interfaces/habit";

@Injectable({
  providedIn: 'root'
})
export class ApiHabitsService {

  public getHabits(): Observable<Habit[]> {
    return of(HABITS).pipe(delay(500));
  }
}

// export const HABITS: Habit[] = [
//   { id: 1, name: 'work', hours: 32 },
//   { id: 2, name: 'play', hours: 16 },
//   { id: 3, name: 'workout', hours: 4 }
// ]
export const HABITS: Habit[] = [
  { id: 1, name: 'Work', hours: 32, bgColor: "#AEFFAC", icon: "pi pi-briefcase"},
  { id: 2, name: 'Play', hours: 16 , bgColor: "#FFACAC", icon: "pi pi-play" },
  { id: 3, name: 'Workout', hours: 5, bgColor: "#FF96EE", icon: "pi pi-bolt" },
  { id: 4, name: 'Study', hours: 11, bgColor: "#B4FAFF", icon: "pi pi-book" },
  { id: 5, name: 'Cook', hours: 9, bgColor: "#ACD2FF", icon: "pi pi-users" },
  { id: 6, name: 'Clean', hours: 3, bgColor: "#D95353", icon: "pi pi-eraser" }
]
