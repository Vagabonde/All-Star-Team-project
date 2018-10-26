import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GroupsComponent} from './groups/groups.component';
import {GroupComponent} from './group/group.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ModalLoginComponent} from './modal-login/modal-login.component';
import {ModalSignUpComponent} from './modal-sign-up/modal-sign-up.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomepageComponent,
        ModalLoginComponent,
        ModalSignUpComponent,
        GroupsComponent,
        GroupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
