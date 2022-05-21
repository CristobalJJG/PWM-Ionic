import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CestaPage } from './cesta.page';

const routes: Routes = [
  { path: '', component: CestaPage },
  { path: 'op-tiendas', loadChildren: () => import('./carrito/op-tiendas/op-tiendas.module').then( m => m.OpTiendasPageModule) },
  { path: 'op-envio',   loadChildren: () => import('./carrito/op-envio/op-envio.module').then( m => m.OpEnvioPageModule) },
  { path: 'form-tienda',loadChildren: () => import('./carrito/form-tienda/form-tienda.module').then( m => m.FormTiendaPageModule)},
  { path: 'pago-envio', loadChildren: () => import('./carrito/pago-envio/pago-envio.module').then( m => m.PagoEnvioPageModule) },
  { path: 'pago-tienda',loadChildren: () => import('./carrito/pago-tienda/pago-tienda.module').then( m => m.PagoTiendaPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CestaPageRoutingModule {}
