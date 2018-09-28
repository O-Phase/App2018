import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { TimedifferenceProvider } from '../../providers/timedifference/timedifference';

/**
 * Generated class for the NewsFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-feed',
  templateUrl: 'news-feed.html',
  providers: [TimedifferenceProvider]
})
export class NewsFeedPage {

  constructor(private timedifference: TimedifferenceProvider, public navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsFeedPage');
    this.timedifference.runTimer("NewsFeedPage");
    /*this.storage.get("firstLogin").then((firstLoginLocal) => {
      if (firstLoginLocal != true) {
        this.FirstTimeAlert;
        console.log("first Login?" + firstLoginLocal);
      }
      this.storage.set("firstLogin", true);
    });*/
  }

  ionViewDidEnter() {
    this.FirstTimeAlert;
  }
  

  openMap() {
    this.navCtrl.push('KartePage');
  }

  FirstTimeAlert() {
    console.log("firsttimealert called");
    let alert = this.alertCtrl.create({
      title: 'Willkommen zur O-Phasen App 2018',
      message: "<p>Beispieltext der sehr lang ist, die Ophase ist richtig cool habt Spaß trinkt viel Bier und eskaliert richtig. Lets gooooooooooooo!!</p>",
      buttons: ['Ok']
    });
    alert.present();
  }



}
