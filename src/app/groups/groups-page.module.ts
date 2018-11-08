import {CommonModule} from '@angular/common';
import {GroupsComponent} from './groups.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ModalAddGroupComponent} from './modal-add-group/modal-add-group.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        GroupsComponent,
        ModalAddGroupComponent
    ],
    exports: [
        GroupsComponent,
        ModalAddGroupComponent
    ],
})
export class GroupsPageModule {
}
