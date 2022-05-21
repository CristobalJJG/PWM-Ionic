import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpEnvioPage } from './op-envio.page';

const routes: Routes = [
  {
    path: '',
    component: OpEnvioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpEnvioPageRoutingModule {}
