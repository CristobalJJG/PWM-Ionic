import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddObjectPage } from './add-object.page';

const routes: Routes = [
  {
    path: '',
    component: AddObjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddObjectPageRoutingModule {}
