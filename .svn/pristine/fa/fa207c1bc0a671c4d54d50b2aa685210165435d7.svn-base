import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypageProfilePage } from './mypage-profile.page';
import { RequestProfileResolverService } from './resolver/profile.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MypageProfilePage,
    resolve: {
        profile: RequestProfileResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypageProfilePageRoutingModule {}
