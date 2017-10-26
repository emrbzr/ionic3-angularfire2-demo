import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PokeProvider } from '../providers/poke/poke';
import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: "AIzaSyC0ELG2JcHLrBCotqo9t5_vunKTLF1g6wc",
  authDomain: "pokedex-918f3.firebaseapp.com",
  databaseURL: "https://pokedex-918f3.firebaseio.com",
  projectId: "pokedex-918f3",
  storageBucket: "pokedex-918f3.appspot.com",
  messagingSenderId: "973093366301"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PokeProvider
  ]
})
export class AppModule {}
