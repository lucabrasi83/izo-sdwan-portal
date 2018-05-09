import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {LoginService} from '../login/login.service';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(public authService: LoginService, public router: Router) { }

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
      return false;
    }
    else {
      return true;
    }
  }
}
