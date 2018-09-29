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
    var kneipenbesuch = moment("2018-10-08T19:00");
    var fruehstueck1 = moment("2018-10-09T09:00");
    var schlogaRallye = moment("2018-10-09T10:30");
    var karaokeParty = moment("2018-10-09T19:30");
    var fruestueck2 = moment("2018-10-10T09:00");
    var elsassFahrt = moment("2018-10-10T16:30");
    var cenClub = moment("2018-10-10T22:30");
    var fruestueck3 = moment("2018-10-11T09:00");
    var diskavery = moment("2018-10-11T11:30");
    var thursdayNight = moment("2018-10-11T19:00");
    var profCafe = moment("2018-10-12T09:00");
    var unirundgang = moment("2018-10-12T11:30");
    var flunkyBowl = moment("2018-10-12T18:00");
    var krokoKeller = moment("2018-10-12T23:00");
    var gahaParty = moment("2018-10-13T19:00");

    setTimeout(() => {
      var ophasetogo = moment.duration(moment(ophase).diff(moment())).asSeconds(); //time difference between current time and o-phase in seconds
      var kneipenbesuchtogo = moment.duration(moment(kneipenbesuch).diff(moment())).asSeconds();
      var fruehstueck1togo = moment.duration(moment(fruehstueck1).diff(moment())).asSeconds();
      var schlogaRallyetogo = moment.duration(moment(schlogaRallye).diff(moment())).asSeconds();
      var karaokePartytogo = moment.duration(moment(karaokeParty).diff(moment())).asSeconds();
      var fruestueck2togo = moment.duration(moment(fruestueck2).diff(moment())).asSeconds();
      var elsassFahrttogo = moment.duration(moment(elsassFahrt).diff(moment())).asSeconds();
      var cenClubtogo = moment.duration(moment(cenClub).diff(moment())).asSeconds();
      var fruestueck3togo = moment.duration(moment(fruestueck3).diff(moment())).asSeconds();
      var diskaverytogo = moment.duration(moment(diskavery).diff(moment())).asSeconds();
      var thursdayNighttogo = moment.duration(moment(thursdayNight).diff(moment())).asSeconds();
      var profCafetogo = moment.duration(moment(profCafe).diff(moment())).asSeconds();
      var unirundgangtogo = moment.duration(moment(unirundgang).diff(moment())).asSeconds();
      var flunkyBowltogo= moment.duration(moment(flunkyBowl).diff(moment())).asSeconds();
      var krokoKellertogo = moment.duration(moment(krokoKeller).diff(moment())).asSeconds();
      var gahaPartytogo = moment.duration(moment(gahaParty).diff(moment())).asSeconds();

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
