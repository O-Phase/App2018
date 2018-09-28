import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular/umd';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { OneSignal } from '@ionic-native/onesignal';
import { TimedifferenceProvider } from '../providers/timedifference/timedifference';
import { PusherServiceProvider } from '../providers/pusher-service/pusher-service';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {tabsPlacement: 'top',tabsHideOnSubPages: true}
    ),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OneSignal,
    TimedifferenceProvider,
    PusherServiceProvider
  ]
})
export class AppModule {}
