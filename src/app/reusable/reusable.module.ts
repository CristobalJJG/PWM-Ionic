import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/HeaderComponent.1';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OptionListComponent } from '../option-list/option-list.component';
import { CarritoComponent } from '../carrito/carrito.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    OptionListComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    OptionListComponent,
    CarritoComponent
  ]
})

export class ReusableModule { }
