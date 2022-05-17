import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';

import { CatalogoPage } from './catalogo.page';
import { HeaderComponent } from "../header/HeaderComponent.1";
import { ReusableModule } from '../reusable/reusable.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPageRoutingModule,
    ReusableModule
  ],
  declarations: [CatalogoPage]
})
export class CatalogoPageModule {}
