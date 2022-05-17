import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetoPageRoutingModule } from './objeto-routing.module';

import { ObjetoPage } from './objeto.page';
import { ReusableModule } from '../reusable/reusable.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetoPageRoutingModule,
    ReusableModule
  ],
  declarations: [ObjetoPage]
})
export class ObjetoPageModule {}
