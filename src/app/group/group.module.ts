import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineComponent} from './timeline/timeline.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {TabsComponent} from "../tabs/tabs.component";


@NgModule({
    declarations: [
        TimelineComponent,
        SidebarComponent,
        TabsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TimelineComponent,
        SidebarComponent
    ]
})

export class GroupModule {
}
