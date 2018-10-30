import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TimelineComponent
  ]
})

export class GroupModule {}
