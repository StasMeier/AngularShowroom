import {Component, Input} from '@angular/core';
import {Node} from '../../../../models';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + nodeVisual.x + ',' + nodeVisual.y + ')'">
      <svg:circle
        class="node"
        [attr.fill]="nodeVisual.color"
        cx="0"
        cy="0"
        [attr.r]="nodeVisual.r">
      </svg:circle>
      <svg:text
        class="node-name"
        [attr.font-size]="nodeVisual.fontSize">
        {{nodeVisual.id}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./y-axis-visual.component.css']
})
export class YAxisVisualComponent {
  @Input('nodeVisual') nodeVisual: Node;
}
