import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GroupsComponent} from './groups/groups.component';
import {GroupComponent} from './group/group.component';
import {HomepageComponent} from './homepage/homepage.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './core/auth.guard';
import {GroupAttendanceGuard} from '@app/core/group-attendance.guard';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'groups', component: GroupsComponent, canActivate: [GroupAttendanceGuard]},
    {path: 'groups/:groupId', component: GroupComponent},
    {path: 'notfound', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
