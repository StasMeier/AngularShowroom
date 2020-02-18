import {Component, OnInit} from '@angular/core';
import {ChartComponent} from '../chart/chart.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent extends ChartComponent implements OnInit {

  getPath(value: number): string {
    const {rO, rI, cX, cY, xO, yO, xI, yI} = this.getPathValues(value);

    const path = 'M' + (cX - rI) + ',' + cY + ' ';
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
