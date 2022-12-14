  import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
    `
      .dona{
        width: 100%;
        height:400px !important;
      }
    `
  ]
})
export class DonaComponent{

    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ], backgroundColor: ['blue', 'green', 'pink'] },
        // { data: [ 50, 150, 120 ] },
        // { data: [ 250, 130, 70 ] }
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';

 


}
