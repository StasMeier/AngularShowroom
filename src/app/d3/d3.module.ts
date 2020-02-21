import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {D3BubbleComponent, D3LineComponent} from './graph';
import {D3Service} from './d3.service';
import {SHARED_VISUALS} from './graph/shared';
import {D3_DIRECTIVES} from './directives';

@NgModule({
  declarations: [
    D3BubbleComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    D3LineComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [D3Service],
  exports: [D3BubbleComponent, D3LineComponent]
})
export class D3Module {
}
