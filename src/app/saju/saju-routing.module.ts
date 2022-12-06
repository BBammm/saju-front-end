import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SajuPage } from './saju.page';

const routes: Routes = [
  {
    path: '',
    component: SajuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SajuPageRoutingModule {}
