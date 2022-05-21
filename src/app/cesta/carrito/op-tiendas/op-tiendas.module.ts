import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpTiendasPageRoutingModule } from './op-tiendas-routing.module';

import { OpTiendasPage } from './op-tiendas.page';
import { ReusableModule } from 'src/app/reusable/reusable.module';
import { CarritoModule } from '../../carrito.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpTiendasPageRoutingModule,
    ReusableModule,
    ReusableModule,
    CarritoModule
  ],
  declarations: [OpTiendasPage]
})
export class OpTiendasPageModule {}
