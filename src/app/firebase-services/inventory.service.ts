import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../login/login.service';

@Injectable({providedIn: 'root'})
export class InventoryService {

  private basePath = '/tenant/';



  constructor(private db: AngularFireDatabase, public authService: LoginService) { }

  getTenantDevices(tenant): Observable<any[]> {

    return this.db.list(`${this.basePath}/${tenant}/devices`).valueChanges();
  }

  getTenantObject() {
  return this.db.object(`/users/${this.authService.isAuthenticated().uid}/tenant`).snapshotChanges();

  }


}
