import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'> ;

  // { DEJO ESTO PARA SABER COMO LUCE LA DATA DE BARCHARTDATA
  //    labels:
  //    this.barChartLabels,
  //     //['2020', '2021', '2022', '2023', '20124', '2025', '2026'],
    
  //   datasets: 
  //   // [ { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#11F2CE', hoverBackgroundColor:'red' },
  //   //    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#E55B99', hoverBackgroundColor:'red' },
  //   //    { data: [ 18, 28, 30, 49, 56, 67, 70 ], label: 'Probando', backgroundColor:'#7483FD', hoverBackgroundColor:'red' }]
  // };


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };

  public barChartType: ChartType = 'bar';


  


  constructor() { }

  ngOnInit(): void {
    if( this. horizontal){
      this.barChartOptions!.indexAxis = 'y';
    }
  }

  //events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }


}
