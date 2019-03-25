import decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { UsersInternships } from './usersinternships';

export class Auth {
  public token: any;
  public tokenPayload: any;
  public role: string;
  public router: Router;
  public ui: UsersInternships[];

  public getAuth() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.tokenPayload = decode(this.token);
      this.role = this.tokenPayload.isadmin ? 'admin' : 'estudiante';
      this.ui = this.tokenPayload.ui;
    }
  }
  constructor(injector: Injector) {
    this.router = injector.get(Router);
  }
}
