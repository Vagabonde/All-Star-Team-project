import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    TimelineComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TimelineComponent,
    SidebarComponent
  ]
})

export class GroupModule {}
