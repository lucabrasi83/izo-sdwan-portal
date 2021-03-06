import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({providedIn: 'root'})
export class LoginService {
  private user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          // console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );

    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => {
        this.db.database.goOffline();
        this.router.navigate(['/']);
      });
  }

  isLoggedIn() {
    if (this.userDetails === null ) {
      return false;
    } else {
      return true;
    }
  }

  isAuthenticated() {
    return this._firebaseAuth.auth.currentUser;
  }

}
