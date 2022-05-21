import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpEnvioPageRoutingModule } from './op-envio-routing.module';

import { OpEnvioPage } from './op-envio.page';
import { CarritoModule } from '../../carrito.module';
import { ReusableModule } from 'src/app/reusable/reusable.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpEnvioPageRoutingModule,
    CarritoModule,
    ReusableModule
  ],
  declarations: [OpEnvioPage]
})
export class OpEnvioPageModule {}
