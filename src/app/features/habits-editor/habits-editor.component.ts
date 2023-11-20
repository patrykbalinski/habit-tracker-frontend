import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { map } from "rxjs";
import { HabitsStorageService } from "@habits/data-access/habits-storage.service";

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  selector: 'app-habits-editor',
  templateUrl: './habits-editor.component.html',
  styleUrls: ['./habits-editor.component.scss']
})
export class HabitsEditorComponent implements OnInit {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private habitsStorage: HabitsStorageService = inject(HabitsStorageService);

  public isEditMode: boolean = !!this.activatedRoute.snapshot.params['id'];
  public form: FormGroup;
  public habitName: string;

  public ngOnInit(): void {
    this.createForm();
    this.initDataHandler();
  }

  private createForm(): void {
    this.form = new FormGroup({})
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
