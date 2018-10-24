import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent} from "./groups/groups.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {GroupComponent} from "./group/group.component";

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'groups', component: GroupsComponent},
    {path:'groups/:groupId', component: GroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
