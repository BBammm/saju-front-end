import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfileService } from '../service/profile.service';

@Injectable({
    providedIn: 'root'
})
export class RequestProfileResolverService implements Resolve<any> {

    constructor(
        private profileResolve: ProfileService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.profileResolve.getProfile();
    }
}
