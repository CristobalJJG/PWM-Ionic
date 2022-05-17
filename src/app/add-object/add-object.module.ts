import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddObjectPageRoutingModule } from './add-object-routing.module';

import { AddObjectPage } from './add-object.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddObjectPageRoutingModule
  ],
  declarations: [AddObjectPage]
})
export class AddObjectPageModule {}
