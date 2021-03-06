import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'amexio-d3-chart-pie',
  templateUrl: './pie.component.html'
})
export class AmexioD3PieChartComponent implements OnInit {

  @Input('data') data: any;

  @Output() onLegendClick: any = new EventEmitter<any>();

  @Output() onChartClick: any = new EventEmitter<any>();

  @Input() legend: boolean = true ;

  @Input('color') colors: any = [];

  @Input('width') width: any = "300";

  @Input('height') height: any = "300";

  @Input() title: any = "";


  ngOnInit(){

  }

  legendClick(node:any){
    this.onLegendClick.emit(node);
  }

  chartClick(node:any){
       this.onChartClick.emit(node);
  }
}
