import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage, public navParams: NavParams) {
  }

  pw1 = ""
  login() {
    console.log(this.pw1);
    switch (this.pw1) {
      case "Hallo": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 1);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "Nerd": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 2);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe3": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 3);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe4": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 4);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe5": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 5);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe6": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 6);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe7": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 7);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe8": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 8);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe9": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 9);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe10": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 10);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe11": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 11);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe12": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 12);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe13": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 13);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe14": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 14);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe15": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 15);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe16": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 16);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe17": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 17);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe18": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 18);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe19": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 19);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe20": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 20);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe21": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 21);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe22": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 22);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe23": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 23);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe24": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 24);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe25": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 25);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      default: {
        this.presentAlert();
        break;
      }
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Falsches Passwort',
      message: "<p>Deine Eingabe:</p> " + this.pw1,
      buttons: ['Verstanden']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
