import { Injectable } from '@angular/core';
import moment from "moment";

/*
  Generated class for the TimedifferenceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimedifferenceProvider {

  constructor() {
    console.log('Hello TimedifferenceProvider Provider');
  }

  public anzeigemonat;
  public anzeigetag;
  public anzeigestunde;
  public anzeigeminute;
  public anzeigesekunde;

  runTimer(seconds) {
    var ophase = moment("2018-10-08T08:00");
    var ms = moment.duration(moment(ophase).diff(moment())).asSeconds();
    this.anzeigemonat = moment.duration(ms, "seconds").months();
    this.anzeigetag = moment.duration(ms, "seconds").days();
    this.anzeigestunde = moment.duration(ms, "seconds").hours();
    this.anzeigeminute = moment.duration(ms, "seconds").minutes();
    this.anzeigesekunde = moment.duration(ms, "seconds").seconds();


    console.log("moment", "RELEVANT", ms, this.anzeigemonat, this.anzeigetag, this.anzeigestunde, this.anzeigeminute, this.anzeigesekunde);
    setTimeout(() => {
      seconds--;
      if (seconds>0) {
        this.runTimer(seconds);
      }
    }, 1000)
  }

}
