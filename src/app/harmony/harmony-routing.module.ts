import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarmonyPage } from './harmony.page';

const routes: Routes = [
  {
    path: '',
    component: HarmonyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarmonyPageRoutingModule {}
