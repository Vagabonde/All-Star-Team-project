import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GroupsComponent} from './groups/groups.component';
import {GroupComponent} from './group/group.component';
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
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {AuthGuard} from './core/auth.guard';
import {GroupsPageModule} from './groups/groups-page.module'

@NgModule({
    declarations: [
        AppComponent,
        GroupComponent,
        HomepageComponent,
        ModalLoginComponent,
        ModalSignUpComponent,
        HeaderComponent,
        PageNotFoundComponent,
        GroupsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase, 'All-Star-Team-project'),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule,
        GroupModule,
        GroupsPageModule,
        FormsModule
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
