import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './ui/bar-chart/bar-chart.component';
import { RadarChartComponent } from './ui/radar-chart/radar-chart.component';

@Component({
  selector: 'app-habits-statistics',
  standalone: true,
  imports: [CommonModule, BarChartComponent, RadarChartComponent],
  templateUrl: './habits-statistics.component.html',
  styleUrls: ['./habits-statistics.component.scss'],
})
export class HabitsStatisticsComponent {}
