import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoEnvioPageRoutingModule } from './pago-envio-routing.module';

import { PagoEnvioPage } from './pago-envio.page';
import { CarritoModule } from '../../carrito.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoEnvioPageRoutingModule,
    CarritoModule
  ],
  declarations: [PagoEnvioPage]
})
export class PagoEnvioPageModule {}
