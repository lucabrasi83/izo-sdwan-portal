import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
import {Observable} from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthguardService implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.afAuth.authState
      .pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/']);
        }

      }));
  }

}
