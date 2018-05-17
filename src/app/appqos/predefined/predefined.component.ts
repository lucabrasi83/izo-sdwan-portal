import {Component, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';


@Component({
  selector: 'fuse-predefined',
  templateUrl: './predefined.component.html',
  styleUrls: ['./predefined.component.scss']

})
export class PredefinedComponent implements OnInit {

  constructor() {

  }

  @ViewChild(DatatableComponent) table: DatatableComponent;

  appAssignButton: boolean;
  appMoveButton: boolean;
  appUnassignButton: boolean;

  rows = [
    { appname: 'rtp-audio', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/qr.html#wp3349895184',
      sdwanprofileassigned: 'DPS-COS1-IN', fullname: 'Real-time Transport Protocol Audio'},

    { appname: 'rtp-video', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/qr.html#wp1049373493',
      sdwanprofileassigned: 'DPS-COS2-IN', fullname: 'Real-time Transport Protocol Video'},

    { appname: 'cifs', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/c.html#wp8030949240',
      sdwanprofileassigned: 'DPS-COS4-IN', fullname: 'Common Internet File System'},

    { appname: 'sap', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/s.html#wp3648377384',
      sdwanprofileassigned: 'NONE', fullname: 'SAP'},

    { appname: 'lwapp', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/kl.html#wp1218098110',
      sdwanprofileassigned: 'DPS-COS3-IN', fullname: 'Lightweight Access Point Protocol'},

    { appname: 'share-point', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/s.html#wp2801751522',
      sdwanprofileassigned: 'NONE', fullname: 'Microsoft SharePoint'},

    { appname: 'teamviewer', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/t.html#wp2024931152',
      sdwanprofileassigned: 'NONE', fullname: ' TeamViewer Remote Access and Desktop Sharing'},

    { appname: 'ftp', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/f.html#wp2855779164'
      , sdwanprofileassigned: 'NONE', fullname: 'File Transfer Protocol'},

    { appname: 'oracle-bi', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/o.html#wp1034906410',
      sdwanprofileassigned: 'NONE', fullname: 'Oracle Business Intelligence'},

    { appname: 'ftp-data', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/f.html#wp3023521090'
      , sdwanprofileassigned: 'NONE', fullname: 'File Transfer [Default Data]'},

    { appname: 'oracle', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/o.html#wp8059412320',
      sdwanprofileassigned: 'NONE', fullname: 'Oracle Database'},

    { appname: 'salesforce', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/s.html#wp3482661629',
      sdwanprofileassigned: 'NONE', fullname: 'Salesforce CRM'},

    { appname: 'amazon-web-services',
      descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/0a.html#wp2538534008',
      sdwanprofileassigned: 'NONE', fullname: 'Amazon Web Services'},

    { appname: 'ms-update', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/m.html#wp2299803813',
      sdwanprofileassigned: 'NONE', fullname: 'Microsoft Windows Update Service'},

    { appname: 'ms-wbt', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/m.html#wp1830157905',
      sdwanprofileassigned: 'NONE', fullname: 'Microsoft Remote Desktop Protocol'},

    { appname: 'ms-office-365', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/m.html#wp1687874051',
      sdwanprofileassigned: 'NONE', fullname: 'Microsoft Office 365'},

    { appname: 'ms-office-web-apps',
      descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/m.html#wp3200754594',
      sdwanprofileassigned: 'NONE', fullname: 'Microsoft Office Web Applications'},

    { appname: 'windows-azure',
      descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/wxyz.html?bookSearch=true#wp1862588639',
      sdwanprofileassigned: 'NONE', fullname: 'Microsoft Windows Azure'},

    { appname: 'netbios', descriptionurl: 'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_nbar/prot_lib/config_library/pp3700/nbar-prot-pack3700/n.html#wp1777004490',
      sdwanprofileassigned: 'NONE', fullname: 'Netbios'},

    ];


  temp = this.rows;

  updateFilter(event) {
    const val = event.target.value.toString().toLowerCase().trim();

    // get the columns numbers
    const colsAmt = 4;

    // get the key names for each column in dataset
    const keys = Object.keys(this.temp[0]);


    const temp = this.temp.filter(function(item){
      for (let i = 0; i < colsAmt; i++){
        // check for a match
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
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

  ngOnInit() {

    this.appAssignButton = false;
    this.appMoveButton = false;
    this.appUnassignButton = false;

  }
  onSelect(row: any) {

    console.log('Select Event', row.appname);

    if (row.sdwanprofileassigned === 'NONE') {
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


}
