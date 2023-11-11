import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Habit} from "@habits/interfaces/habit";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.scss'
})
export class HabitComponent {

  @Input({ required: true }) habit: Habit;
  @Output() edit: EventEmitter<Habit['id']> = new EventEmitter<Habit['id']>();
  @Output() addOccurrence: EventEmitter<Habit['id']> = new EventEmitter<Habit['id']>();
}
