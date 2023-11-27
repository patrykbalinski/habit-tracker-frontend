import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitsStorageService } from "@habits/data-access/habits-storage.service";
import { HabitComponent } from "@habits/ui/habit/habit.component";
import { Habit } from "@habits/interfaces/habit";
import { Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { ToastService } from "@shared/services/toast.service";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HabitComponent,
    TranslateModule,
    ToastModule
  ],
  providers: [
    ToastService,
    MessageService
  ],
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss']
})
export class HabitsComponent implements OnInit{

  public habitsStorage: HabitsStorageService = inject(HabitsStorageService);
  private router: Router = inject(Router);
  public toast: ToastService = inject(ToastService);

  public ngOnInit(): void {
    this.habitsStorage.getHabits();
  }

  public addHabit(): void {
    this.router.navigate(['', 'habit', 'new']).then();
  }

  public editHabit(habitId: Habit['id']): void {
    this.router.navigate(['', 'habit', habitId, 'edit']).then();
  }

  public addHabitOccurrence(habitId: Habit['id']): void {
    this.router.navigate(['', 'habit', habitId, 'occurrence']).then();
  }
}
