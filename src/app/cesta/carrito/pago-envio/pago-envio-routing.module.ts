import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoEnvioPage } from './pago-envio.page';

const routes: Routes = [
  {
    path: '',
    component: PagoEnvioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoEnvioPageRoutingModule {}
