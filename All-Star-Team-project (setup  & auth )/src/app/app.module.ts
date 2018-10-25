import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './services/user-info/user-info.component';
import { UserLoginComponent } from './services/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserLoginComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase, 'All-Star-Team-project'),
      AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireStorageModule,
      AppRoutingModule,
      MDBBootstrapModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
