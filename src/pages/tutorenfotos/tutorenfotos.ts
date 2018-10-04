import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TutorenfotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorenfotos',
  templateUrl: 'tutorenfotos.html',
})
export class TutorenfotosPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorenfotosPage');
  }

  refresh() {
    this.navCtrl.push(this.navCtrl.getActive().component).then(() => {
      let index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    })
  }

}
