import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/HeaderComponent.1';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})

export class ReusableModule { }
