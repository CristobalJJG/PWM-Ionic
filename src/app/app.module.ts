import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { ReusableModule } from './reusable/reusable.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from 'src/services/auth.service';
import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    AuthService
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
