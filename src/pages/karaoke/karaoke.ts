import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the KaraokePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-karaoke',
  templateUrl: 'karaoke.html',
})
export class KaraokePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KaraokePage');
  }

  refresh() {
    this.navCtrl.push(this.navCtrl.getActive().component).then(() => {
      let index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    })
  }

}
