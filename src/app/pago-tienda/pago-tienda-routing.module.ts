import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoTiendaPage } from './pago-tienda.page';

const routes: Routes = [
  {
    path: '',
    component: PagoTiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoTiendaPageRoutingModule {}
