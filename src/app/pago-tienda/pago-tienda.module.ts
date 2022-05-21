import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoTiendaPageRoutingModule } from './pago-tienda-routing.module';

import { PagoTiendaPage } from './pago-tienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoTiendaPageRoutingModule
  ],
  declarations: [PagoTiendaPage]
})
export class PagoTiendaPageModule {}
