import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habit } from "@habits/interfaces/habit";
import { TranslateModule } from "@ngx-translate/core";
import {ButtonModule} from 'primeng/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule
  ],
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.scss']
})
export class HabitComponent {

  @Input({ required: true }) habit: Habit;
  @Output() edit: EventEmitter<Habit['id']> = new EventEmitter<Habit['id']>();
  @Output() addOccurrence: EventEmitter<Habit['id']> = new EventEmitter<Habit['id']>();
}
