import {Component, ElementRef, HostBinding, Inject, OnDestroy, Renderer2, ViewEncapsulation, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs/Subscription';
import { FuseConfigService } from '@fuse/services/config.service';
import { MatDialog } from '@angular/material';
import { FuseStaticRouteComponent } from './fuse-static-route/fuse-static-route.component';
import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
    selector     : 'fuse-main',
    templateUrl  : './main.component.html',
    styleUrls    : ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseMainComponent implements OnDestroy
{
    onConfigChanged: Subscription;
    fuseSettings: any;
    dialogRef: any;
    rowSelected = false;
    deviceSelected: any;


    @ViewChild(DatatableComponent) table: DatatableComponent;

    @HostBinding('attr.fuse-layout-mode') layoutMode;

  rows = [
    { site_name: 'TCL-UK-LONDON-01', device_name: 'TCL-UK-LONDON-01-G-MPLS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '1223234', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-UK-CRESSEX-01', device_name: 'TCL-UK-CRESSEX-01-G-MPLS-R-1', status: 'OFFLINE', device_model: 'CiscoISR4221', sn: '423312', os_version: '16.7.1', activation_status: 'PENDING' },
    { site_name: 'TCL-SG-SINGAPORE-01', device_name: 'TCL-SG-SINGAPORE-01-IZOIW-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '32132132', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-HK-HONGKONG-01', device_name: 'TCL-HK-HONGKONG-01-EAS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '321313123', os_version: '16.7.1' , activation_status: 'PENDING'},
    { site_name: 'TCL-BR-SAOPAOLO-01', device_name: 'TCL-BR-SAOPAOLO-01-EAS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '321321321312', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-US-NEWYORK-01', device_name: 'TCL-US-NEWYORK-01-IZOIW-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '23213213', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-US-SANTACLARA-01', device_name: 'TCL-US-SANTACLARA-01-G-MPLS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '13232131', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-FR-PARIS-01', device_name: 'TCL-FR-PARIS-01-EAS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '23213213213', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-FR-PARIS-01', device_name: 'TCL-FR-PARIS-01-IZOIW-R-2', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '3123213', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-ES-MADRID-01', device_name: 'TCL-ES-MADRID-01-G-MPLS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '321321312', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-IN-MUMBAI-01', device_name: 'TCL-IN-MUMBAI-01-G-MPLS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '3213213213', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-IN-MUMBAI-01', device_name: 'TCL-IN-MUMBAI-01-G-IZOIW-R-2', status: 'OFFLINE', device_model: 'Cisco 881', sn: '23213213', os_version: '15.1(5)', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-IN-CHENNAI-01', device_name: 'TCL-IN-CHENNAI-01-G-MPLS-R-1', status: 'OFFLINE' , device_model: 'CiscoISR4221', sn: '21321323', os_version: '16.7.1', activation_status: 'ACTIVATED'},
    { site_name: 'TCL-IN-KOLKATA-01', device_name: 'TCL-IN-KOLKATA-01-IZOIW-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '321321321', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-IN-PUNE-01', device_name: 'TCL-IN-PUNE-01-G-MPLS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '31232132', os_version: '16.7.1', activation_status: 'PENDING' },
    { site_name: 'TCL-ES-MADRID-01', device_name: 'TCL-ES-MADRID-01-EAS-R-1', status: 'ONLINE' , device_model: 'Cisco 1941', sn: '31232131', os_version: '15.1(5)', activation_status: 'ACTIVATED'},
    { site_name: 'TCL-AU-SYDNEY-01', device_name: 'TCL-AU-SYDNEY-01-IZOIW-R-1', status: 'OFFLINE', device_model: 'CiscoISR4221', sn: '312321312', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-DE-FRANKFURT-01', device_name: 'TCL-DE-FRANKFURT-01-G-MPLS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '321321312', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-DE-FRANKFURT-01', device_name: 'TCL-DE-FRANKFURT-01-G-MPLS-R-2', status: 'ONLINE', device_model: 'Cisco 2921', sn: '12321312', os_version: '15.1(5)', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-IT-MILANO-01', device_name: 'TCL-IT-MILANO-01-G-MPLS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '32132131', os_version: '16.7.1', activation_status: 'ACTIVATED' },
    { site_name: 'TCL-AE-DUBAI-01', device_name: 'TCL-AE-DUBAI-01-EAS-R-1', status: 'ONLINE', device_model: 'CiscoISR4221', sn: '321321321', os_version: '16.7.1', activation_status: 'ACTIVATED' },
  ];

  temp = this.rows;

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private fuseConfig: FuseConfigService,
        private platform: Platform,
        public dialog: MatDialog,
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
   row.activation_status = 'ACTIVATED';
 }, 50);
   console.log(row);
 }

  onSelect(row: any) {

    console.log('Select Event', row.site_name);
    this.rowSelected = true;
    this.deviceSelected = row;
  }

  staticRouteForm() {

    this.dialogRef = this.dialog.open(FuseStaticRouteComponent, {
      panelClass: 'static-routes-form-dialog',
      width: '1500px',
      height: '700px',
      data      : {
        action: 'new',
        cpe_name: this.deviceSelected.device_name
      }
    });


  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase().trim();

    // get the columns numbers
    const colsAmt = 7;

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
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onLimitChange($event) {
    this.table.limit = $event.value;
    this.table.recalculate();
  }
    ngOnDestroy()
    {
        this.onConfigChanged.unsubscribe();
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
