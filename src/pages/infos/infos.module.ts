import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { InfosPage } from './infos';

@NgModule({
  declarations: [
    InfosPage,
  ],
  imports: [
    IonicPageModule.forChild(InfosPage),
  ],
})
export class InfosPageModule {}
