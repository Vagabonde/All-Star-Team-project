import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GroupComponent} from './group/group.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ModalLoginComponent} from './modal-login/modal-login.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {HeaderComponent} from './header/header.component';
import {GroupModule} from './group/group.module';
import {AuthService} from '@service/auth.service';
import {LessonService} from '@service/lesson.service';
import {FormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
//import {AuthGuard} from './core/auth.guard';
import {GroupsPageModule} from './groups/groups-page.module'
import {StorageServiceModule} from 'angular-webstorage-service';
import {MockService} from '@service/mock.service';
import {UserService} from '@service/user.service';
import {GroupService} from '@service/group.service';

@NgModule({
    declarations: [
        AppComponent,
        GroupComponent,
        HomepageComponent,
        ModalLoginComponent,
        HeaderComponent,
        PageNotFoundComponent,

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
        FormsModule,
        StorageServiceModule
    ],
    providers: [
        AuthService,
        UserService,
        MockService,
        LessonService,
        GroupService,
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
