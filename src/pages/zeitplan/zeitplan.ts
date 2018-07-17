import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimedifferenceProvider } from '../../providers/timedifference/timedifference';

/**
 * Generated class for the ZeitplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zeitplan',
  templateUrl: 'zeitplan.html',
})
export class ZeitplanPage {

  constructor(private timedifference: TimedifferenceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZeitplanPage');
    this.timedifference.runTimer("ZeitplanPage");
  }
  openMap() {
    this.navCtrl.push('KartePage');
  }

}
