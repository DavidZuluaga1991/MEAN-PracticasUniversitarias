import { Injectable, Injector } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Auth } from '../models/auth';
import { UsersInternships } from '../models/usersinternships';


@Injectable({
  providedIn: 'root'
})
export class MeanService extends Auth {

  public get loggedIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  // public started(): boolean {
  //   if (localStorage.getItem('token')) {
  //     this.login = true;
  //     return true;
  //   }
  //   return false;
  // }
  constructor(injector: Injector, public jwtHelper: JwtHelperService) {
    super(injector);
  }
  public loginValid(token: string): boolean {
    if (token) {
      localStorage.setItem('token', token);
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('token');
    // tslint:disable-next-line:no-unused-expression
    this.router.navigate(['login']);
  }
  public getId(): string {
    this.getAuth();
    return this.tokenPayload.id;
  }
  public getRole(): string {
    this.getAuth();
    return this.role;
  }
  public getUI(): UsersInternships[] {
    this.getAuth();
    return this.ui;
  }
//   public getMenu(): any[] {
//     this.menu.push({text: 'Usuarios', router: 'user'});
//     this.menu.push({text: 'Pasantías', router: 'internships'});
//     this.menu.push({text: 'Usuarios', router: 'user'});
//     return this.menu;
// }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    if (token === null) {
      return true;
    }
    // console.log(this.jwtHelper.isTokenExpired(token));
    return !this.jwtHelper.isTokenExpired(token);
  }
}
