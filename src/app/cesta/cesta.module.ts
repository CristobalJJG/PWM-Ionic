import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CestaPageRoutingModule } from './cesta-routing.module';

import { CestaPage } from './cesta.page';
import { ReusableModule } from '../reusable/reusable.module';
import { CarritoModule } from './carrito.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CestaPageRoutingModule,
    ReusableModule,
    CarritoModule
  ],
  declarations: [CestaPage]
})
export class CestaPageModule {}
