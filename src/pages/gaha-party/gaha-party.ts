import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GahaPartyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gaha-party',
  templateUrl: 'gaha-party.html',
})
export class GahaPartyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GahaPartyPage');
  }

  refresh() {
    this.navCtrl.push(this.navCtrl.getActive().component).then(() => {
      let index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    })
  }

}
