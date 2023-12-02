import { inject, Injectable } from '@angular/core';
import { ApiHabitsEditorService } from "@habits-editor/data-access/api-habits-editor.service";
import { BehaviorSubject, finalize, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HabitsEditorStorageService {
  private apiHabitsEditor: ApiHabitsEditorService = inject(ApiHabitsEditorService);

  public readonly habitsCategories$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public readonly habitsCategoriesLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly habitsCategoriesSuccess$: Subject<boolean> = new Subject<boolean>();

  public getHabitsCategories(): void {
    this.habitsCategoriesLoading$.next(true);
    this.apiHabitsEditor.getHabitsCategories()
      .pipe(finalize(() => this.habitsCategoriesLoading$.next(false)))
      .subscribe({
        next: (habitsCategories: string[]) => {
          this.habitsCategories$.next(habitsCategories);
          this.habitsCategoriesSuccess$.next(true);
        },
        error: () => this.habitsCategoriesSuccess$.next(false)
      })
  }
}
