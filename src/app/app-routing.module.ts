import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GroupsComponent} from "./groups/groups.component";
import {GroupComponent} from "./group/group.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'groups', component: GroupsComponent},
    {path: 'groups/:groupId', component: GroupComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
