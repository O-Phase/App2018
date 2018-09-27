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
    var ophase = moment("2018-10-08T08:00");
    var kneipenbesuch = moment("2018-10-08T20:00");
    var fruehstueck1 = moment("2018-10-08T08:00");
    var fruestueck2 = moment("2018-10-08T08:00");
    var fruestueck3 = moment("2018-10-08T08:00");
    setTimeout(() => {
      var ophasetogo = moment.duration(moment(ophase).diff(moment())).asSeconds(); //time difference between current time and o-phase in seconds
      var kneipenbesuchtogo = moment.duration(moment(kneipenbesuch).diff(moment())).asSeconds();
      var ms = Math.min(ophasetogo, kneipenbesuchtogo);
      this.anzeigemonat = moment.duration(ms, "seconds").months(); //months of the time difference
      this.anzeigetag = moment.duration(ms, "seconds").days(); //days of the time difference and so on
      this.anzeigestunde = moment.duration(ms, "seconds").hours();
      this.anzeigeminute = moment.duration(ms, "seconds").minutes();
      this.anzeigesekunde = moment.duration(ms, "seconds").seconds();
      this.runTimer(page);
    }, 1000)
  }
}
