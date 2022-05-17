import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => 
      import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => 
      import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => 
      import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => 
      import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'cesta',
    loadChildren: () => 
      import('./cesta/cesta.module').then( m => m.CestaPageModule)
  },
  {
    path: 'objeto/:id',
    loadChildren: () => import('./objeto/objeto.module').then( m => m.ObjetoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
