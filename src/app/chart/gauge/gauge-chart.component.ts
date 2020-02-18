import {Component, OnInit} from '@angular/core';
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

  ngOnInit() {
    super.ngOnInit();
    this.svgStyle.background = 'transparent';
    this.pathValues = this.getPathValues(this.maxValue);
  }

  get sliderTickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this.tickInterval) : 0;
  }


  onInputChange(event: MatSliderChange) {
    this.value = event.value;
  }

  getPath(value: number): string {
    const {rO, rI, cX, cY, xO, yO, xI, yI} = this.getPathValues(value);

    let path = 'M' + (cX - rI) + ',' + cY + ' ';
    path += 'L' + (cX - rO) + ',' + cY + ' ';
    path += 'A' + rO + ',' + rO + ' 0 0 1 ' + xO + ',' + yO + ' ';
    path += 'L' + xI + ',' + yI + ' ';
    path += 'A' + rI + ',' + rI + ' 0 0 0 ' + (cX - rI) + ',' + cY + ' ';
    path += 'Z ';
    return path;
  }

  getPathValues(value: number): any {
    if (value < this.minValue) {
      value = this.minValue;
    }
    if (value > this.maxValue) {
      value = this.maxValue;
    }

    const dx = 0;
    const dy = 0;

    const alpha = (1 - (value - this.minValue) / (this.maxValue - this.minValue)) * Math.PI;
    const rO = 2 * this.width / 5;
    const rI = rO - this.width / 8;

    const cX = 0.5 * this.width + dx;
    const cY = 0.7 * this.height + dy;

    const xO = this.width / 2 + dx + rO * Math.cos(alpha);
    const yO = this.height - (this.height - cY) - rO * Math.sin(alpha);
    const xI = this.width / 2 + dx + rI * Math.cos(alpha);
    const yI = this.height - (this.height - cY) - rI * Math.sin(alpha);

    return {alpha, rO, rI, cX, cY, xO, yO, xI, yI};
  }
}
