import {Component, ViewEncapsulation, OnInit, Inject, OnDestroy} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { FusePredefDialogComponent } from './predefined/fuse-predef-dialog/fuse-predef-dialog.component';
import {MatDialog} from '@angular/material';
import { AppqosProfileService } from '../firebase-services/appqos-profile.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'fuse-appqos',
  templateUrl: './appqos.component.html',
  styleUrls: ['./appqos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppqosComponent implements OnInit, OnDestroy {

  appAssignButton: boolean;
  appMoveButton: boolean;
  appUnassignButton: boolean;
  dialogRef: any;
  rowSelected: any;
  firebaseTenantSub: Subscription;
  firebaseAppqosProfileSub: Subscription;
  tenant: any;
  appqosprofiles = [];

  constructor( @Inject(DOCUMENT) private document: any,
               public dialog: MatDialog,
               private appqosProfile: AppqosProfileService) {

  }

  ngOnInit() {
    this.appAssignButton = false;
    this.appUnassignButton = false;
    this.appMoveButton = false;

    // First Retrieve Tenant ID from user
    this.firebaseTenantSub = this.appqosProfile.getTenantObject().subscribe(tenantid => {
      this.tenant = tenantid.payload.val();
      this.firebaseAppqosProfileSub = this.appqosProfile.getAppqosProfiles(this.tenant).subscribe(profiles =>
      {
        this.appqosprofiles = profiles;

      });
    });
  }
  ngOnDestroy()
  {
    this.firebaseTenantSub.unsubscribe();
    this.firebaseAppqosProfileSub.unsubscribe();
  }

 onButtonDisplay($event) {

    this.rowSelected = $event;

   if ($event.sdwanprofileassigned === 'NONE') {
     this.appAssignButton = true;
     this.appUnassignButton = false;
     this.appMoveButton = false;
   }
   else {
     this.appAssignButton = false;
     this.appUnassignButton = true;
     this.appMoveButton = true;
   }
 }

  onClickAssignApp() {

    this.dialogRef = this.dialog.open(FusePredefDialogComponent, {
      panelClass: 'predefined-app-form-dialog',
      width: 'auto',
      height: '220px',
      data      : {
        action: 'assign',
        appname: this.rowSelected.appname,
        sdwanprofilelist: this.appqosprofiles
      }
    });
    this.dialogRef.afterClosed()
      .subscribe((profile: string) => {
        if ( !profile )
        {
          return;
        }

        console.log('The app is ' + this.rowSelected.appname + ' The profile is ' + profile);



      });


  }

}
