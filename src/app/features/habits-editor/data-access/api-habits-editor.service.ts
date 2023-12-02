import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiHabitsEditorService {

  public getHabitsCategories(): Observable<string[]> {
    return of(HABITS_CATEGORIES);
  }
}

export const HABITS_CATEGORIES: string[] = [
  'Work',
  'Play',
  'Workout',
  'Study',
  'Cook',
  'Clean',
  'Other'
]
