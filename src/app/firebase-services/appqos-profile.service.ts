import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {LoginService} from '../login/login.service';

@Injectable({providedIn: 'root'})
export class AppqosProfileService {

  private profileBasePath = '/appqos/profiles';



  constructor(private db: AngularFireDatabase, public authService: LoginService) { }

  getAppqosProfiles(tenant): Observable<any[]> {

    return this.db.list(`${this.profileBasePath}/${tenant}`).valueChanges();
  }

  getTenantObject() {
  return this.db.object(`/users/${this.authService.isAuthenticated().uid}/tenant`).snapshotChanges();

  }



}
