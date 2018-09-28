import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TimedifferenceProvider } from '../../providers/timedifference/timedifference';

/**
 * Generated class for the MeineGruppePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meine-gruppe',
  templateUrl: 'meine-gruppe.html',
})
export class MeineGruppePage {
GruppeNummer;


  constructor(private timedifference: TimedifferenceProvider, public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
    this.storage.get('group').then((val) => {
      for(var i=1; i<=25; i++) {
        let elemAk = document.getElementById("g"+i);
        if(i != val) {
          elemAk.style.display = "none";  }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeineGruppePage');
    this.timedifference.runTimer("meineGruppePage");
    /*let element = document.getElementById("g1");
    element.style.display = "none";*/
  }




  displayGroup(){
    console.log('Gruppen Nummer:', this.GruppeNummer);
  }

  openMap() {
    this.navCtrl.push('KartePage');
  }

}
