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
export class HabitsStatisticsComponent {
  // bar chart example data
  bar_labels = ['Q1', 'Q2', 'Q3', 'Q4'];
  bar_dataset_name = 'Sales';
  bar_dataset_value = [540, 325, 702, 620];

  // radar chart example data
  radar_labels = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];
  radar_dataset_name_1 = 'My First dataset';
  radar_dataset_name_2 = 'My Second dataset';
  radar_dataset_value_1 = [65, 59, 90, 81, 56, 55, 40];
  radar_dataset_value_2 = [28, 48, 40, 19, 96, 27, 100];
}
