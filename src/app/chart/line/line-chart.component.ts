import {Component, OnInit} from '@angular/core';
import {ChartComponent} from '../chart/chart.component';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent extends ChartComponent implements OnInit {

  dataset = {
    children: [
      {Name: 'Olives', Count: 4319},
      {Name: 'Tea', Count: 4159},
      {Name: 'Mashed Potatoes', Count: 2583},
      {Name: 'Boiled Potatoes', Count: 2074},
      {Name: 'Milk', Count: 1894},
      {Name: 'Chicken Salad', Count: 1809},
      {Name: 'Vanilla Ice Cream', Count: 1713},
      {Name: 'Cocoa', Count: 1636},
      {Name: 'Lettuce Salad', Count: 1566},
      {Name: 'Lobster Salad', Count: 1511},
      {Name: 'Chocolate', Count: 1489},
      {Name: 'Apple Pie', Count: 1487},
      {Name: 'Orange Juice', Count: 1423},
      {Name: 'American Cheese', Count: 1372},
      {Name: 'Green Peas', Count: 1341},
      {Name: 'Assorted Cakes', Count: 1331},
      {Name: 'French Fried Potatoes', Count: 1328},
      {Name: 'Potato Salad', Count: 1306},
      {Name: 'Baked Potatoes', Count: 1293},
      {Name: 'Roquefort', Count: 1273},
      {Name: 'Stewed Prunes', Count: 1268}]
  };

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
