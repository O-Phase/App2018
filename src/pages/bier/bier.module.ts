import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BierPage } from './bier';

@NgModule({
  declarations: [
    BierPage,
  ],
  imports: [
    IonicPageModule.forChild(BierPage),
  ],
})
export class BierPageModule {}
