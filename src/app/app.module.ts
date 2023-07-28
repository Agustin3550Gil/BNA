import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { StepperModule } from './Stepper/stepper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    HomePageModule,
    IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule,
     StepperModule,
    //  AngularFireStorageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
