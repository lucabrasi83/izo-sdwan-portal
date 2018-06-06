import {Component, ViewEncapsulation, OnInit, Inject, OnDestroy } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { FusePredefDialogComponent } from './predefined/fuse-predef-dialog/fuse-predef-dialog.component';
import {MatDialog} from '@angular/material';
import { AppqosProfileService } from '../firebase-services/appqos-profile.service';
import {Subscription} from 'rxjs/Subscription';
import {MessageService} from 'primeng/components/common/messageservice';
import {AppqosPredefinedService} from '../firebase-services/appqos-predefined.service';
import {CustomComponent} from './custom/custom.component';


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
  dialogRefCustom: any;
  rowSelected: any;
  firebaseTenantSub: Subscription;
  firebaseAppqosProfileSub: Subscription;
  tenant: any;
  appqosprofiles = [];
  tempappqosprofiles = [];


  loadingSpinner: boolean;

  constructor( @Inject(DOCUMENT) private document: any,
               public dialog: MatDialog,
               public dialogCustom: MatDialog,
               private appqosProfile: AppqosProfileService,
               private msgService: MessageService,
               private appqosPredefinedSvc: AppqosPredefinedService,
               ) {

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

    // Subscribe to loading Spinner Event Emitter from service
    this.appqosPredefinedSvc.loadingSpinnerSvc.subscribe(spinnerflag => {
      this.loadingSpinner = spinnerflag;
    });
  }
  ngOnDestroy()
  {
    this.firebaseTenantSub.unsubscribe();
    this.firebaseAppqosProfileSub.unsubscribe();
  }

 onButtonDisplay($event) {

    this.rowSelected = $event;

    if ($event.row.sdwanprofile === 'UNCHECKED') {
      this.appAssignButton = false;
      this.appUnassignButton = false;
      this.appMoveButton = false;
    }

   else if ($event.row.sdwanprofile === 'NONE') {
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



    if (this.rowSelected.row.sdwanprofile === 'PENDING') {
      this.msgService.add({
        severity: 'dangerous', summary: 'Action not allowed', detail:
          `There is an ongoing App steering operation on ${this.rowSelected.row.appname}
          <br>
          <br>
           Please wait for the operation to complete.`
      });
      return;
    }

    this.dialogRef = this.dialog.open(FusePredefDialogComponent, {
      panelClass: 'predefined-app-form-dialog',
      width: 'auto',
      height: '220px',
      data      : {
        action: 'assign',
        appname: this.rowSelected.row.appname,
        dialogflag: true,
        sdwanprofilelist: this.appqosprofiles
      }
    });
    this.dialogRef.afterClosed()
      .subscribe((profile: string) => {

        if ( !profile )
        {
          return;
        }

        // Call Assign App from Service
        this.appqosPredefinedSvc.assignAppqosPrefinedProfile(this.tenant, this.rowSelected.index.toString(), profile, this.rowSelected.row.appname);

        // Reset Button After Dialog closed
        this.appAssignButton = false;
        this.appUnassignButton = false;
        this.appMoveButton = false;


      });


  }
  onClickMoveApp() {

    if (this.rowSelected.row.sdwanprofile === 'PENDING') {
      this.msgService.add({
        severity: 'error', summary: 'Action not allowed', detail:
          `There is an ongoing App steering operation on ${this.rowSelected.row.appname}.
          <br>
          <br>
           Please wait for the operation to complete.`
      });
      return;
    }

    // Copy SDWAN Profile Array in temp array
    this.tempappqosprofiles = [...this.appqosprofiles];

    // Remove current assigned app from Array
    this.tempappqosprofiles.splice(this.tempappqosprofiles.indexOf(this.rowSelected.row.sdwanprofile), 1);

    this.dialogRef = this.dialog.open(FusePredefDialogComponent, {
      panelClass: 'predefined-app-form-dialog',
      width: 'auto',
      height: '220px',
      data      : {
        action: 'move',
        appname: this.rowSelected.row.appname,
        sdwanprofilelist: this.tempappqosprofiles
      }
    });

    this.dialogRef.afterClosed()
      .subscribe((profile: string) => {
        if ( !profile )
        {
          return;
        }

        console.log('The app is ' + this.rowSelected.row.appname + ' The profile is ' + profile);

        // Reset temp array
        this.tempappqosprofiles = this.appqosprofiles;

        // Call Move App from Service
        this.appqosPredefinedSvc.moveAppqosPrefinedProfile(this.tenant, this.rowSelected.index.toString(), profile, this.rowSelected.row.appname);

        // Reset Button After Dialog closed
        this.appAssignButton = false;
        this.appUnassignButton = false;
        this.appMoveButton = false;


      });

  }
  onClickUnassignApp() {

    if (this.rowSelected.row.sdwanprofile === 'PENDING') {
      this.msgService.add({
        severity: 'error', summary: 'Action not allowed', detail:
          `There is an ongoing App steering operation on this app
          <br>
          <br>
           Please wait for the operation to complete.`
      });
      return;
    }

    this.dialogRef = this.dialog.open(FusePredefDialogComponent, {
      panelClass: 'predefined-app-form-dialog',
      width: 'auto',
      height: '220px',
      data      : {
        action: 'unassign',
        appname: this.rowSelected.row.appname,
        sdwanprofilelist: this.rowSelected.row.sdwanprofile
      }
    });
    this.dialogRef.afterClosed()
      .subscribe((profile: string) => {
        if ( !profile )
        {
          return;
        }
        // Call unassign app from Service
        this.appqosPredefinedSvc.unassignAppqosPrefinedProfile(this.tenant, this.rowSelected.index.toString(), profile, this.rowSelected.row.appname);

        // Reset Button After Dialog closed
        this.appAssignButton = false;
        this.appUnassignButton = false;
        this.appMoveButton = false;


      });

  }
  onCreateCustomApp() {
    this.dialogRefCustom = this.dialogCustom.open(CustomComponent, {
      panelClass: 'custom-app-form-dialog',
      width: 'auto',
      height: 'auto',
      maxHeight: 'auto'

    });
  }

}
