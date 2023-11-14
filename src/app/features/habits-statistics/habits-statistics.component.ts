import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './ui/bar-chart/bar-chart.component';

@Component({
  selector: 'app-habits-statistics',
  standalone: true,
  imports: [CommonModule, BarChartComponent],
  templateUrl: './habits-statistics.component.html',
  styleUrls: ['./habits-statistics.component.scss'],
})
export class HabitsStatisticsComponent {}
