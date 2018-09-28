import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { MeineGruppePage } from './meine-gruppe';

@NgModule({
  declarations: [
    MeineGruppePage,
  ],
  imports: [
    IonicPageModule.forChild(MeineGruppePage),
  ],
  exports: [
    MeineGruppePage
  ],
})
export class MeineGruppePageModule {}
