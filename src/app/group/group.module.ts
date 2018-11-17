import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeworkTabComponent } from './homework-tab/homework-tab.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { ResultTabComponent } from './tabs/result-tab/result-tab.component';

@NgModule({
    declarations: [
        TimelineComponent,
        SidebarComponent,
        TabsComponent,
        HomeworkTabComponent,
        ResultTabComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        RouterModule
    ],
    exports: [
        TimelineComponent,
        SidebarComponent
    ]
})

export class GroupModule {
}
