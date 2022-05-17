import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetoPage } from './objeto.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetoPageRoutingModule {}
