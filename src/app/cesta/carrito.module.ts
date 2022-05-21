import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { OptionListComponent } from './option-list/option-list.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CarritoComponent,
    OptionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  exports:[
    OptionListComponent,
    CarritoComponent
  ]
})
export class CarritoModule { }
