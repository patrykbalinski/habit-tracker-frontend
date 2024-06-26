import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DividerModule } from "primeng/divider";
import { InputNumberModule } from "primeng/inputnumber";
import { DropdownModule } from "primeng/dropdown";
import { ApiHabitsEditorService } from "@habits-editor/data-access/api-habits-editor.service";
import { HabitsEditorStorageService } from "@habits-editor/data-access/habits-editor-storage.service";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    CalendarModule,
    ReactiveFormsModule,
    InputTextModule,
    DividerModule,
    InputNumberModule,
    DropdownModule,
    RouterLink
  ],
  providers: [
    ApiHabitsEditorService,
    HabitsEditorStorageService
  ],
  selector: 'app-habits-editor',
  templateUrl: './habits-editor.component.html',
  styleUrls: ['./habits-editor.component.scss']
})
export class HabitsEditorComponent implements OnInit {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  protected habitsEditorStorage: HabitsEditorStorageService = inject(HabitsEditorStorageService);

  public isEditMode: boolean = !!this.activatedRoute.snapshot.params['id'];
  public form: FormGroup;
  public readonly goalFrequency: {name: string, code: string}[] = [
    { name: 'daily', code: 'daily' },
    { name: 'weekly', code: 'weekly' },
    { name: 'monthly', code: 'monthly' }
  ]

  public ngOnInit(): void {
    this.createForm();
    this.habitsEditorStorage.getHabitsCategories();
  }

  private createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      goalHours: new FormControl(0, [Validators.required]),
      goalMinutes: new FormControl(0, [Validators.required]),
      goalFrequency: new FormControl(this.goalFrequency[0], [Validators.required])
    })
  }

  public onUpdate(): void {
    console.log(this.form.value);
  }
}
