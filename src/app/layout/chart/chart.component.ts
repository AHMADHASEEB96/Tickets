import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexOptions } from 'ng-apexcharts';  // Import ApexOptions
import { ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  series: ApexAxisChartSeries;
  chart: ApexChart;  // Use ApexOptions instead of ApexChart
  title: ApexTitleSubtitle;
  chartLabels: any;
  fill: any;
  dataLabels: any;
  @Input() contentObj: any;
  @Input() dir: any;

  constructor() {
    this.fill = {
      colors: ['#8A74F9', 'rgba(138, 116, 249, 0.26)'],
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 84, 175],
      }
    },
      this.dataLabels = {
        enabled: false
      },
      this.title = {

      }
    this.series = [{
      name: 'any',
      data: [10, 3, 3.7, 8.2, 10, 7, 12, 6, 3, 8, 11, 5],
      color: '#8A74F9', // Set line color
      // type: 'line',
    }]
    this.chart = {
      type: 'area',
      width: '100%',
      height: '100%',
      toolbar: {
        show: false,
      },
      fontFamily: 'NeoSansArabic, sans-serif',

    };
    this.chartLabels = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
  }
}
