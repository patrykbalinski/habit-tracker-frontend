import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import {ActivatedRoute, ParamMap } from "@angular/router";
import { map } from "rxjs";
import { HabitsStorageService } from "@habits/data-access/habits-storage.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "primeng/button";

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    TranslateModule,
    ButtonModule
  ],
  selector: 'app-habit-occurrence-adder',
  templateUrl: './habit-occurrence-adder.component.html',
  styleUrls: ['./habit-occurrence-adder.component.scss']
})
export class HabitOccurrenceAdderComponent implements OnInit {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private habitsStorage: HabitsStorageService = inject(HabitsStorageService);

  form: FormGroup;
  habitName: string;

  ngOnInit(): void {
    this.createForm();
    this.initDataHandler();
  }

  private createForm(): void {
    this.form = new FormGroup({
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required])
    })
  }

  private initDataHandler(): void {
    this.activatedRoute.paramMap.pipe(
      map((params: ParamMap) => Number(params.get('id'))),
      untilDestroyed(this)
    ).subscribe((habitId: number) => {
      this.habitName = this.habitsStorage.getHabitName(habitId);
    })
  }
}
