import { Injectable, Injector } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { MeanService } from '../mean.service';
import { Auth } from 'src/app/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService extends Auth implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(injector: Injector, private meanService: MeanService) {
    super(injector);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const currentUser = this.authenticationService.currentUserValue;
    this.getAuth();
    const expectedRole = route.data.role;
    if (this.token) {
      if (
        this.meanService.isAuthenticated() ||
        (!this.meanService.isAuthenticated() &&
          this.role !== expectedRole &&
          this.role !== 'admin')
      ) {
        if (!this.meanService.isAuthenticated() && this.role !== expectedRole) {
          this.router.navigate(['internships']);
        } else {
          this.router.navigate(['login']);
        }
        return false;
      }
      return true;
    }
  }
}
