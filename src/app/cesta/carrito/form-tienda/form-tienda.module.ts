import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTiendaPageRoutingModule } from './form-tienda-routing.module';

import { FormTiendaPage } from './form-tienda.page';
import { ReusableModule } from 'src/app/reusable/reusable.module';
import { CarritoModule } from '../../carrito.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormTiendaPageRoutingModule,
    ReusableModule,
    CarritoModule
  ],
  declarations: [FormTiendaPage]
})
export class FormTiendaPageModule {}
