import {EventEmitter, Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable, Subject} from 'rxjs';
import {LoginService} from '../login/login.service';
import {MessageService} from 'primeng/components/common/messageservice';


@Injectable({providedIn: 'root'})
export class AppqosPredefinedService {

  private predifinedBasePath = 'appqos/predefined';

  loadingSpinnerSvc = new EventEmitter<boolean>();

  // Subject subscribed by components to reset checkbox upon user action
  private indexSource = new Subject<number>();

  indexObs = this.indexSource.asObservable();


  constructor(private db: AngularFireDatabase,
              public authService: LoginService,
              private msgService: MessageService
              ) { }


  getTenantObject() {
  return this.db.object(`/users/${this.authService.isAuthenticated().uid}/tenant`).snapshotChanges();

  }
  getAppqosPredefined(tenant): Observable<any[]> {
    return this.db.list(`${this.predifinedBasePath}/${tenant}`).valueChanges();
  }

  unassignAppqosPrefinedProfile(tenant, index, profile, appname) {

  this.db.object(`${this.predifinedBasePath}/${tenant}/${index}`).update(
    {'sdwanprofile': 'NONE'}
  ).then(() => {

    this.msgService.add({
        severity: 'success', summary: 'Successful Operation', detail:
          `${appname} successfully unassigned from ${profile}`
      });

    // Set Observable index to infinite value to reset checkbox upon user actions
    this.indexSource.next(9999);

    }
    )
    .catch(error => {
      this.msgService.add({
        severity: 'error', summary: 'Error', detail:
          `Oops. Issue while proceeding with operation.
          <br>
           ${error}`
      });
    });


  }

  assignAppqosPrefinedProfile(tenant, index, profile, appname) {

    // Set Loading Spinner to True to show on template
    this.loadingSpinnerSvc.emit(true);

    this.db.object(`${this.predifinedBasePath}/${tenant}/${index}`).update(
      {'sdwanprofile': profile}
    ).then(() => {

        this.loadingSpinnerSvc.emit(false);


        this.msgService.add({
          severity: 'success', summary: 'Successful Operation', detail:
            `${appname} successfully assigned to ${profile}`
        });

      // Set Observable index to infinite value to reset checkbox upon user actions
      this.indexSource.next(9999);
      }
    )
      .catch(error => {

          this.loadingSpinnerSvc.emit(false);


        this.msgService.add({
          severity: 'error', summary: 'Error', detail:
            `Oops. Issue while proceeding with operation.
          <br>
           ${error}`
        });
      });
  }
  moveAppqosPrefinedProfile(tenant, index, profile, appname) {

    this.db.object(`${this.predifinedBasePath}/${tenant}/${index}`).update(
      {'sdwanprofile': 'PENDING'}
    ).then(() => {
        this.msgService.add({
          severity: 'warn', summary: 'Pending Operation', detail:
            `${appname} move to ${profile} is being processed with Task ID 123498u8cde
            <br>
            Browse to the Task Viewer to follow the operation progress.`
        });

      // Set Observable index to infinite value to reset checkbox upon user actions
      this.indexSource.next(9999);
      }
    )
      .catch(error => {
        this.msgService.add({
          severity: 'error', summary: 'Error', detail:
            `Oops. Issue while proceeding with operation.
          <br>
           ${error}`
        });
      });
  }

}
