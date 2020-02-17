import {Component, Input, OnInit} from '@angular/core';
import {MatSliderChange} from '@angular/material';
import {ChartComponent} from '../chart/chart.component';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent extends ChartComponent implements OnInit {

  autoTicks = true;
  disabled = false;
  invert = false;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  vertical = false;
  tickInterval = 1;

  get sliderTickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this.tickInterval) : 0;
  }


  onInputChange(event: MatSliderChange) {
    this.value = event.value;
  }
}
