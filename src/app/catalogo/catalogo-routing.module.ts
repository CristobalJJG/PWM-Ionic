import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjetoPage } from '../objeto/objeto.page';

import { CatalogoPage } from './catalogo.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoPage
  },
  {
    path:'objeto/:id',
    component:ObjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoPageRoutingModule {}
