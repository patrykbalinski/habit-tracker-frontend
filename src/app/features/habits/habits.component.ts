import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiHabitsService } from "@habits/data-access/api-habits.service";
import { HabitsStorageService } from "@habits/data-access/habits-storage.service";
import { HabitComponent } from "@habits/ui/habit/habit.component";
import { Habit } from "@habits/interfaces/habit";
import { Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HabitComponent,
    TranslateModule
  ],
  providers: [
    ApiHabitsService,
    HabitsStorageService
  ],
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss']
})
export class HabitsComponent implements OnInit{

  public habitsStorage: HabitsStorageService = inject(HabitsStorageService);
  private router: Router = inject(Router);

  public ngOnInit(): void {
    this.habitsStorage.getHabits();
  }

  public editHabit(habitId: Habit['id']): void {
    this.router.navigate(['', 'edit-habit', habitId]).then();
  }

  public addHabitOccurrence(habitId: Habit['id']): void {
    this.router.navigate(['', 'habit-occurrence', habitId]).then();
  }
}
