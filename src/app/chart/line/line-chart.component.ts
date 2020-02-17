import {Component, Input, OnInit} from '@angular/core';
import {ChartComponent} from '../chart/chart.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent extends ChartComponent implements OnInit {

}
