import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciatotalPage } from './asistenciatotal.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciatotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciatotalPageRoutingModule {}
