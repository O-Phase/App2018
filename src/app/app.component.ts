import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any

  constructor(
    platform: Platform,
    storage: Storage,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController, 
  ) {
    storage.get("isLoggedIn").then((status) => {
      console.log("component logged in?", status)
      if(status) {
        this.goToTabsPage()
      } else{
        this.goToLoginPage()
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
      if (isCordovaAvailable()){
        this.oneSignal.startInit("cfeded7c-2512-4e8b-8725-f6bd46862601", "1048538306662");
	        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
	        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
	        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
          this.oneSignal.endInit();
      }
    });
  }

  private onPushReceived(payload: OSNotificationPayload) {
    //alert(payload.body);
    let alert = this.alertCtrl.create({
      title: payload.title,
      message: payload.body,
      buttons: ['Ok']
    });
    alert.present();
  }
  
  private onPushOpened(payload: OSNotificationPayload) {
  }

 goToTabsPage ( ) {
    this.rootPage = "TabsPage"
  }
  goToLoginPage() {
    this.rootPage = "LoginPage"
  }
}

