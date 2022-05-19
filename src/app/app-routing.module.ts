import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddObjectPage } from './add-object/add-object.page';
import { CatalogoPage } from './catalogo/catalogo.page';
import { CestaPage } from './cesta/cesta.page';
import { FavoritosPage } from './favoritos/favoritos.page';
import { LoginPage } from './login/login.page';
import { NotFoundPage } from './not-found/not-found.page';
import { ObjetoPage } from './objeto/objeto.page';
import { PerfilPage } from './perfil/perfil.page';

const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule) },
  { path: 'perfil/:user', loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule) },
  { path: 'favoritos', loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule) },
  { path: 'cesta', loadChildren: () => import('./cesta/cesta.module').then( m => m.CestaPageModule) },
  { path: 'objeto/:id', loadChildren: () => import('./objeto/objeto.module').then( m => m.ObjetoPageModule) },
  { path: 'add-object', loadChildren: () => import('./add-object/add-object.module').then( m => m.AddObjectPageModule) },
  { path: '**', loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule) },
];

/* const routes: Routes = [
  {path:'', component:CatalogoPage},
  {path:"catalogo", component: CatalogoPage},
  {path:"login", component: LoginPage},
  {path:'cesta', component:CestaPage}, 
  {path:'op-tienda', component:OpcionTiendaComponent},
  {path:'op-domicilio', component:OpcionDomicilioComponent},
  {path:'form-tienda', component:FormCortoComponent},
  {path:'pay', component:PayComponent}, 
  {path:'add-object', component:AddObjectPage},
  {path:'perfil', component:PerfilPage},
  {path:'favoritos', component:FavoritosPage},
  {path:'objeto/:id', component:ObjetoPage},
  {path:'**', component:NotFoundPage},
]; */

@NgModule({
  imports: [
    RouterModule.forRoot(routes/* , {preloadingStrategy: PreloadAllModules} */)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
