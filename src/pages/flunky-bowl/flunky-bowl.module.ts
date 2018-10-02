import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlunkyBowlPage } from './flunky-bowl';

@NgModule({
  declarations: [
    FlunkyBowlPage,
  ],
  imports: [
    IonicPageModule.forChild(FlunkyBowlPage),
  ],
})
export class FlunkyBowlPageModule {}
