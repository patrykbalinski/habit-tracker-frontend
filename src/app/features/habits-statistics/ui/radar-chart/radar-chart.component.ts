import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
})
export class RadarChartComponent implements OnInit {
  basicData: any;
  basicOptions: any;

  @Input({ required: true }) labels: String[];
  @Input({ required: true }) dataset_value_1: Number[];
  @Input({ required: true }) dataset_name_1: String;
  @Input({ required: true }) dataset_value_2: Number[];
  @Input({ required: true }) dataset_name_2: String;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );

    this.basicData = {
      labels: this.labels,
      datasets: [
        {
          label: this.dataset_name_1,
          borderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointBackgroundColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          data: this.dataset_value_1,
        },
        {
          label: this.dataset_name_2,
          borderColor: documentStyle.getPropertyValue('--pink-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
          pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
          data: this.dataset_value_2,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
          pointLabels: {
            color: textColorSecondary,
          },
        },
      },
    };
  }
}
