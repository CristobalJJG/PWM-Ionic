import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoTiendaPageRoutingModule } from './pago-tienda-routing.module';

import { PagoTiendaPage } from './pago-tienda.page';
import { ReusableModule } from 'src/app/reusable/reusable.module';
import { CarritoModule } from '../../carrito.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoTiendaPageRoutingModule,
    ReusableModule,
    CarritoModule
  ],
  declarations: [PagoTiendaPage]
})
export class PagoTiendaPageModule {}
