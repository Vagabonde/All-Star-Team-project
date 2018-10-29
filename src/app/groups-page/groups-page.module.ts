import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupsComponent} from "./groups/groups.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        GroupsComponent
    ],
    exports: [
        GroupsComponent
    ]
})
export class GroupsPageModule {
}
