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
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {HeaderComponent} from './header/header.component';
import {GroupModule} from './group/group.module';


@NgModule({
    declarations: [
        AppComponent,
        GroupsComponent,
        GroupComponent,
        HomepageComponent,
        NavbarComponent,
        ModalLoginComponent,
        ModalSignUpComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase, 'All-Star-Team-project'),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule,
        GroupModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
