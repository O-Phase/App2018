
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatzPage } from './chatz';



@NgModule({
  declarations: [
    ChatzPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatzPage),
  ],
})
export class ChatzPageModule {
}