import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(private timedifference: TimedifferenceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsFeedPage');
    this.timedifference.runTimer("NewsFeedPage");
  }
  

  openMap() {
    this.navCtrl.push('KartePage');
  }



}
