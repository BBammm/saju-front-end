import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tarot',
  templateUrl: './tarot.page.html',
  styleUrls: ['./tarot.page.scss'],
})
export class TarotPage implements OnInit {

    public userSubscription: Subscription;
    public profile: any;
    public isUserPending = true;

  constructor(
      private authSvc: AuthService,
  ) { }

  ngOnInit() {
      this.setUser();
  }

  private setUser() {
      this.userSubscription = this.authSvc.profile$.subscribe({
          next: (profileInfo) => {
              this.profile = profileInfo.profile;
              this.profile.birth_format = this.profile.birth_ym.replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3');
              this.isUserPending = false;
          }
      });
      this.authSvc.profileSource.next();
  }

}
