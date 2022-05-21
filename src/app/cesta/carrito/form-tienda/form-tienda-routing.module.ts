import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTiendaPage } from './form-tienda.page';

const routes: Routes = [
  {
    path: '',
    component: FormTiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTiendaPageRoutingModule {}
