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
      case "niemalsnuechtern": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 1);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "SebastiansMum": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 2);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "SexyExxxen": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 3);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "FamilieVollsuff": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 4);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "HighFive": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 5);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "Ananas69": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 6);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "saufensogeil": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 7);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "8erbahn": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 8);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "Nasty9er": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 9);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "üüüüü": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 10);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "gruppe11?leidergeil": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 11);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "EngineerYourBeer": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 12);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "Johnny Däpp": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 13);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "fickschnitzel69": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 14);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "Fleischsalat": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 15);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "nichtlangschnacken": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 16);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "#Freibier69": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 17);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "18undgeil": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 18);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "AlphaTier19": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 19);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "BIER!!!": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 20);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "DickesHorn!?": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 21);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "KanakenCrew": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 22);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "Becherstadt": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 23);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "GOAT": {
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 24);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
        break;
      }
      case "$vonhintenrein$": {
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
