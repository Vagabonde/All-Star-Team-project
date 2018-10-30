import {CommonModule} from '@angular/common';
import {GroupsComponent} from "./groups.component";
import {RouterModule} from "@angular/router";
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MDBBootstrapModule.forRoot(),
    ],
    declarations: [
        GroupsComponent
    ],
    exports: [
        GroupsComponent
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    bootstrap: [GroupsComponent]
})
export class GroupsPageModule {
}
