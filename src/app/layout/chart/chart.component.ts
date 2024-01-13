import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexOptions } from 'ng-apexcharts';
import { ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  chartLabels: any;
  fill: any;
  yaxis: any;
  dataLabels: any;
  xaxis: any;
  grid: any;
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
      name: 'Value',
      data: [10, 3, 3.7, 8.2, 10, 7, 12, 6, 3, 8, 11, 5].reverse(),
      color: '#8A74F9',

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
    this.chartLabels = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'].reverse(),
      this.yaxis = {
        show: false
      },
      this.xaxis = {

        labels: {
          style: {
            colors: ['#9291A5', '#9291A5', '#9291A5', '#9291A5', '#9291A5', '#9291A5', '#9291A5', '#9291A5', '#9291A5', '#9291A5', '#9291A5', '#9291A5',], // Change the color to red
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'NeoSansArabic, sans-serif'
          }
        }
      }
    this.grid = {
      borderColor: `#E5E5EF`,

    }
  }
}
