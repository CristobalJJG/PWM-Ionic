import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpTiendasPage } from './op-tiendas.page';

const routes: Routes = [
  {
    path: '',
    component: OpTiendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpTiendasPageRoutingModule {}
