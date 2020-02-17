import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  static uniqueId = 0;

  @Input() value = 80;
  @Input() color = '#fe0400';
  @Input() minValue = 0;
  @Input() maxValue = 100;
  @Input() width = 400;
  @Input() height = 320;

  filterId: string;
  minMaxLabelsOffset = 25;
  backgroundColor = '#eee';
  minMaxLabelStyle = {
    textAnchor: 'middle',
    fill: '#232323',
    stroke: 'none',
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontSize: '20px',
    lineHeight: 'normal',
    fillOpacity: 1
  };
  pathValues: {
    alpha: number,
    rO: number,
    rI: number,
    cX: number,
    cY: number,
    xO: number,
    yO: number,
    xI: number,
    yI: number
  };

  // tslint:disable-next-line:variable-name
  private _valueLabelStyle: any;

  get valueLabelStyle(): any {
    return this._valueLabelStyle;
  }

  set valueLabelStyle(style: any) {
    this._valueLabelStyle = (style.fontSize
      ? style
      : {...style, fontSize: (this.width / 8) + 'px'});
  }

  valueFormatter = (value: number) => `${value}`;

  ngOnInit() {
    this.pathValues = this.getPathValues(this.maxValue);
    this.valueLabelStyle = {
      textAnchor: 'middle',
      fill: '#111',
      stroke: 'none',
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontWeight: 'bold',
      fontStretch: 'normal',
      lineHeight: 'normal',
      fillOpacity: 1
    };
    if (!this.filterId) {
      this.filterId = 'filter_' + ChartComponent.uniqueId++;
    }
  }

  protected getPath(value: number): string {
    const {rO, rI, cX, cY, xO, yO, xI, yI} = this.getPathValues(value);

    let path = 'M' + (cX - rI) + ',' + cY + ' ';
    path += 'L' + (cX - rO) + ',' + cY + ' ';
    path += 'A' + rO + ',' + rO + ' 0 0 1 ' + xO + ',' + yO + ' ';
    path += 'L' + xI + ',' + yI + ' ';
    path += 'A' + rI + ',' + rI + ' 0 0 0 ' + (cX - rI) + ',' + cY + ' ';
    path += 'Z ';
    return path;
  }

  protected getPathValues(value: number): any {
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
