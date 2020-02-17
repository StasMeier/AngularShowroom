import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line/line-chart.component';
import { BarChartComponent } from './bar/bar-chart.component';
import {MatSliderModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { GaugeChartComponent } from './gauge/gauge-chart.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [LineChartComponent, BarChartComponent, GaugeChartComponent, ChartComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule
  ],
  exports: [LineChartComponent, BarChartComponent, GaugeChartComponent]
})
export class ChartModule { }
