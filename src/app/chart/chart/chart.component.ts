import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export abstract class ChartComponent implements OnInit {


  static uniqueId = 0;

  @Input() backgroundColor = '#eee';
  @Input() value = 80;
  @Input() color = '#fe0400';
  @Input() minValue = 0;
  @Input() maxValue = 100;
  @Input() width = 400;
  @Input() height = 320;
  @Input() viewBox = '0 0 ' + this.width + ' ' + this.height;
  @Input() svgStyle = {
    width: this.width + 'px',
    height: this.height + 'px',
    overflow: 'hidden',
    position: 'relative',
    left: '0',
    top: '0',
    background: this.backgroundColor
  };

  transform = 'translate(0, ' + this.height + ') scale(1, -1)';

  filterId: string;
  minMaxLabelsOffset = 25;
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

  abstract getPath(value: number): string;

  abstract getPathValues(value: number): any;
}
