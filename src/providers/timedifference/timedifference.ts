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


  runTimer(page) {
    console.log("runTimer aufgerufen", page);
    var ophase = moment("2018-10-08T08:00"); //time of the event
    setTimeout(() => {
      var ms = moment.duration(moment(ophase).diff(moment())).asSeconds(); //time difference between current time and o-phase in seconds
      this.anzeigemonat = moment.duration(ms, "seconds").months(); //months of the time difference
      this.anzeigetag = moment.duration(ms, "seconds").days(); //days of the time difference and so on
      this.anzeigestunde = moment.duration(ms, "seconds").hours();
      this.anzeigeminute = moment.duration(ms, "seconds").minutes();
      this.anzeigesekunde = moment.duration(ms, "seconds").seconds();
      this.runTimer(page);
    }, 1000)
  }
}
