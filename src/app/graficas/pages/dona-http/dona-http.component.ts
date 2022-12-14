import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
      `
      .dona{
        width: 100%;
        height:400px !important;
      }
  `
  ]
})

export class DonaHttpComponent implements OnInit {

      // Doughnut
      public doughnutChartLabels: string[] = [ 
       // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
       ];

      public doughnutChartData: ChartData<'doughnut'> = {
        labels: [],
        datasets: [
          // { data: 
          //  // [ 350, 450, 100 ], backgroundColor: ['blue', 'green', 'pink'] 
          // },
          // // { data: [ 50, 150, 120 ] },
          // // { data: [ 250, 130, 70 ] }
        ]
      };
      public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSocialesRXJSData()
      .subscribe( ({ labels, data }) => {
         this.doughnutChartData.labels = labels;
         this.doughnutChartData.datasets.push( { data } )
      })











    // this.graficasService.getUsuariosRedesSociales()
    //     .subscribe( data => {
    //       const labels = Object.keys( data );
    //       const values: number[] = Object.values ( data );
         
    //       this.doughnutChartData.labels = labels;
    //       this.doughnutChartData.datasets.push ( { data: values }  );

    //     })
  }

}
