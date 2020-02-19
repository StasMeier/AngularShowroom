import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {D3GraphComponent} from './graph/d3-graph.component';
import {D3Service} from './d3.service';
import {SHARED_VISUALS} from './graph/shared';
import {D3_DIRECTIVES} from './directives';

@NgModule({
  declarations: [
    D3GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  providers: [D3Service],
  exports: [D3GraphComponent]
})
export class D3Module {
}
