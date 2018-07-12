import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class NewsFeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsFeedPage');
    this.runTimer();
  }

  openMap() {
    this.navCtrl.push('KartePage');
  }
  countdown: any="10sekunden";
  event: any="GaHa-Party";


  public seconds =10;

  runTimer() {
    setTimeout(() => {
      this.seconds--;
      if (this.seconds>0) {
        this.runTimer();
      }
    }, 1000)
  }

}
