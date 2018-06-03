import {Component, ElementRef, HostBinding, Inject, OnDestroy, Renderer2, ViewEncapsulation, ViewChild, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs/Subscription';
import { FuseConfigService } from '@fuse/services/config.service';
import { MatDialog } from '@angular/material';
import { FuseStaticRouteComponent } from './fuse-static-route/fuse-static-route.component';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {InventoryService} from '../firebase-services/inventory.service';
import {Inventory} from '../firebase-model/inventory.model';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
    selector     : 'fuse-main',
    templateUrl  : './main.component.html',
    styleUrls    : ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseMainComponent implements OnDestroy, OnInit
{

    onConfigChanged: Subscription;
    firebaseTenantSub: Subscription;
    firebaseInvSub: Subscription;
    fuseSettings: any;
    dialogRef: any;
    rowSelected: boolean;
    deviceSelected: any;
    loadingIndicator = true;
    index: number;


    @ViewChild(DatatableComponent) table: DatatableComponent;

    @HostBinding('attr.fuse-layout-mode') layoutMode;


  // Instantiate Rows
  rows: Inventory[];

  // Instantiate Temp for Table filtering
  temp: Inventory[];

  tenant: any;

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private fuseConfig: FuseConfigService,
        private platform: Platform,
        public dialog: MatDialog,
        private inventoryService: InventoryService,
        private msgService: MessageService,
        @Inject(DOCUMENT) private document: any
    )
    {


      this.onConfigChanged =
            this.fuseConfig.onConfigChanged
                .subscribe(
                    (newSettings) => {
                        this.fuseSettings = newSettings;
                        this.layoutMode = this.fuseSettings.layout.mode;
                    }
                );

        if ( this.platform.ANDROID || this.platform.IOS )
        {
            this.document.body.className += ' is-mobile';
        }


    }

 onToggle(row: any) {
   setTimeout(() => {
   row.activation_status = 'Provisioned';
 }, 50);

 }

  onSelect($event, row: any) {
    if ($event.source.checked) {
      this.index = this.rows.indexOf(row);
      this.deviceSelected = row;
    }
    else {
      this.deviceSelected = undefined;
    }


  }

  staticRouteForm() {

    this.dialogRef = this.dialog.open(FuseStaticRouteComponent, {
      panelClass: 'static-routes-form-dialog',
      width: '1400px',
      height: '900px',
      data      : {
        action: 'new',
        cpe_name: this.deviceSelected.device_name
      }
    });


  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase().trim();

    // get the columns numbers
    const colsAmt = 8;

    // get the key names for each column in dataset
    const keys = Object.keys(this.temp[0]);


    const temp = this.temp.filter(function(item){
      for (let i = 0; i < colsAmt; i++){
        // check for a match
        if (item[keys[i]].toLowerCase().indexOf(val) !== -1 || !val){
          // found match, return true to add to result set
          return true;
        }
      }
    });

    // update the rows
    this.rows = temp;

    // Set Index to Infinite Value to uncheck selection when filtering
    this.index = 99999;

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  // Event to handle Page limit change in ngx-datatable
  onLimitChange($event) {
    this.table.limit = $event.value;
    this.table.recalculate();
  }
  // Feature under development Growl Message
  createFeaturePendingMsg(): void {

    this.msgService.add({
      severity: 'warn', summary: 'Info Message', detail:
                                                `This feature is currently under development. 
                                                 <br> 
                                                 Contact <a href="mailto:sebastien.pouplin@tatacommunications.com">sebastien.pouplin@tatacommunications.com</a>
                                                 for any question.`
    });
  }
  // Subscribe to Inventory Observable from Firebase
  ngOnInit() {


      // First Retrieve Tenant ID from user
     this.firebaseTenantSub = this.inventoryService.getTenantObject().subscribe(tenantid => {
      this.tenant = tenantid.payload.val();
       this.firebaseInvSub = this.inventoryService.getTenantDevices(this.tenant).subscribe(devicesarray =>
      {
        this.rows = devicesarray;
        this.temp = this.rows;
        this.loadingIndicator = false;
      });
    });



  }
    ngOnDestroy()
    {
        this.onConfigChanged.unsubscribe();
        this.firebaseTenantSub.unsubscribe();
        this.firebaseInvSub.unsubscribe();
    }

    addClass(className: string)
    {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string)
    {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }



}
