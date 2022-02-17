import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsPage } from './admins.page';

const routes: Routes = [
  {
    path: '',
    component: AdminsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsPageRoutingModule {}
