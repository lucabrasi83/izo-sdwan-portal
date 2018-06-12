import {Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {BlacklistedIpsService} from './blacklisted-ips.service';
import {BlacklistedPortsService} from './blacklisted-ports.service';
import {Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';



@Component({
  selector: 'fuse-custom-create',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomComponent implements OnInit {

  constructor(public dialogRefCustom: MatDialogRef<CustomComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _formBuilder: FormBuilder,
              private blacklistedIPsSvc: BlacklistedIpsService,
              private blacklistedPortsSvc: BlacklistedPortsService)
               {

  }

  appNameFormGroup: FormGroup;
  appTypeFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  httpurlAppFormGroup: FormGroup;
  sslsniAppFormGroup: FormGroup;
  tcpudpAppFormGroup: FormGroup;
  dummyFormGroup: FormGroup;
  blacklistedIPs = [];
  blacklistedPorts = [];
  ipaddressPattern = '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';
  httpurlPattern = '^[a-z0-9\\*\\.-]{1,500}$';
  sslsniPattern = '^[a-z0-9\\*\\.-]{1,500}$';
  appNamePattern = '^[a-zA-Z0-9]{1,500}$';
  cidrPattern = '^([0-9]|[12][0-9]|3[0-2])$';
  portrangePattern = '^(102[4-9]|10[3-9][0-9]|1[1-9][0-9]{2}|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$';
  formLoadingSpinner = false;

  ngOnInit() {

    // App Name Form Group
    this.appNameFormGroup =
      this._formBuilder.group({
        appNameCtrl: [
         '',
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(15),
              Validators.pattern(this.appNamePattern)
            ]),
          this.forbiddenAppName
        ]
      });

    // App Type Form Group
    this.appTypeFormGroup =
      this._formBuilder.group({
        appTypeCtrl: [
          '',
          Validators.required
        ]
      });

    // HTTP-URL App Details Form Group
    this.httpurlAppFormGroup =
      this._formBuilder.group(
        {
          httpurlControl: [
            '',
            Validators.compose([
              Validators.required,
              Validators.maxLength(30),
              Validators.minLength(3),
              Validators.pattern(this.httpurlPattern)
            ])

          ]
        }
      );

    // SSL SNI App Details Form Group
    this.sslsniAppFormGroup =
      this._formBuilder.group(
        {
          sslsniControl: [
            '',
            Validators.compose([
              Validators.required,
              Validators.maxLength(30),
              Validators.minLength(3),
              Validators.pattern(this.sslsniPattern)
            ])
          ]
        }
      );

    // TCP-UDP App Details Form Group
    this.tcpudpAppFormGroup =
      this._formBuilder.group(
        {
          transporttypeCtrl: [
            '',
            Validators.required
          ],
          iptypeCtrl: [
            '',
            Validators.required
          ],
          porttypeCtrl: [
            '',
            Validators.required
          ]
        }
      );

    // Dummy Form to ensure Material stepper always shows 4 steps
    this.dummyFormGroup =
      this._formBuilder.group(
        {
          dummyControl: [
            '',
            Validators.required
          ]
        }
      );

    this.blacklistedIPs =
      this.blacklistedIPsSvc.getBlacklistedIPs();

    this.blacklistedPorts =
      this.blacklistedPortsSvc.getBlacklistedPorts();


    this.appNameFormGroup.statusChanges
      .pipe(debounceTime(1000))
      .subscribe((status) =>
      {

        return this.formLoadingSpinner = status === 'PENDING';
      }
    );

  }

  form1() {
    console.log(this.appTypeFormGroup);

  }

  form2() {
    console.log(this.secondFormGroup.value);
  }

  forbiddenIPs(control: FormControl): { [s: string]: boolean } {
    if (this.blacklistedIPs.indexOf(control.value) !==
      -1) {
      return {'IPIsForbidden': true};
    }
    return null;
  }

  forbiddenPorts(control: FormControl): { [s: string]: boolean } {
    if (this.blacklistedPorts.indexOf(+control.value) !==
      -1) {
      return {'PortIsForbidden': true};
    }
    return null;
  }

  compareEndPortNumber(control: FormControl): { [s: string]: boolean } {
    if (this.tcpudpAppFormGroup.get('startportCtrl') &&
      control.value !== null &&
      this.tcpudpAppFormGroup.get('startportCtrl').dirty &&
      this.tcpudpAppFormGroup.get('startportCtrl').value >= +control.value) {
      return {'EndPortLower': true};
    }

    // Reset Form Control Error when Startport is less than Endport
    if (this.tcpudpAppFormGroup.get('startportCtrl') &&
      control.value !== null &&
      this.tcpudpAppFormGroup.get('startportCtrl').dirty &&
      this.tcpudpAppFormGroup.get('startportCtrl').value <= +control.value) {
      this.tcpudpAppFormGroup.get('startportCtrl').setErrors(null);
      control.setErrors(null);
      return null;
    }

    return null;
  }

  compareStartPortNumber(control: FormControl): { [s: string]: boolean } {
    if (this.tcpudpAppFormGroup.get('endportCtrl') &&
      control.value !== null &&
      this.tcpudpAppFormGroup.get('endportCtrl').dirty &&
      this.tcpudpAppFormGroup.get('endportCtrl').value <= +control.value) {
      return {'StartPortHigher': true};
    }

    // Reset Form Control when endport is higher than startport
    if (this.tcpudpAppFormGroup.get('endportCtrl') &&
      control.value !== null &&
      this.tcpudpAppFormGroup.get('endportCtrl').touched &&
      this.tcpudpAppFormGroup.get('endportCtrl').value >= +control.value) {
      this.tcpudpAppFormGroup.get('endportCtrl').setErrors(null);
      control.setErrors(null);
      return null;
    }


    return null;
  }






  onChangeIPTypeSelection($event) {

    // First remove Any previous control from IP Type selection
    this.tcpudpAppFormGroup.removeControl('ipaddressArray');
    this.tcpudpAppFormGroup.removeControl('subnetaddressCtrl');
    this.tcpudpAppFormGroup.removeControl('subnetlengthCtrl');

    if ($event.value ===
      'ip-address') {
      this.tcpudpAppFormGroup.addControl('ipaddressArray', new FormArray([], Validators.compose([
        Validators.required
      ])));
    }

    if ($event.value ===
      'cidr') {
      this.tcpudpAppFormGroup.addControl('subnetaddressCtrl', new FormControl([], Validators.compose([
        Validators.required,
        Validators.pattern(this.ipaddressPattern),
        this.forbiddenIPs.bind(this)
      ])));

      this.tcpudpAppFormGroup.addControl('subnetlengthCtrl', new FormControl([], Validators.compose([
        Validators.required,
        Validators.pattern(this.cidrPattern)
      ])));

    }

  }

  onChangePortTypeSelection($event) {

    // First remove Any previous control from Port Type selection
    this.tcpudpAppFormGroup.removeControl('startportCtrl');
    this.tcpudpAppFormGroup.removeControl('endportCtrl');
    this.tcpudpAppFormGroup.removeControl('portsArray');

    if ($event.value ===
      'ports') {
      this.tcpudpAppFormGroup.addControl('portsArray', new FormArray([], Validators.compose([
        Validators.required
      ])));
    }

    if ($event.value ===
      'port-range') {
      this.tcpudpAppFormGroup.addControl('startportCtrl', new FormControl([], Validators.compose([
        Validators.required,
        Validators.pattern(this.portrangePattern),
        this.forbiddenPorts.bind(this),
        this.compareStartPortNumber.bind(this)
      ])));

      this.tcpudpAppFormGroup.addControl('endportCtrl', new FormControl([], Validators.compose([
        Validators.required,
        Validators.pattern(this.portrangePattern),
        this.forbiddenPorts.bind(this),
        this.compareEndPortNumber.bind(this)
      ])));

    }
  }

  onAddIPAddress() {

    if ((<FormArray>this.tcpudpAppFormGroup.get('ipaddressArray')).length <
      8) {

      const control = new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern(this.ipaddressPattern),
        this.forbiddenIPs.bind(this)
      ]));


      (<FormArray>this.tcpudpAppFormGroup.get('ipaddressArray')).push(control);
    }
    else {
      return;
    }

  }

  onRemoveIPAddress() {
    (<FormArray>this.tcpudpAppFormGroup.get('ipaddressArray')).removeAt(-1);
  }


  onAddPort() {

    if ((<FormArray>this.tcpudpAppFormGroup.get('portsArray')).length < 8) {

      const control = new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern(this.portrangePattern),
        this.forbiddenPorts.bind(this)
      ]));


      (<FormArray>this.tcpudpAppFormGroup.get('portsArray')).push(control);
    }
    else {
      return;
    }

  }

  onRemovePort() {
    (<FormArray>this.tcpudpAppFormGroup.get('portsArray')).removeAt(-1);
  }

  onSubmitForm(): void {

  }
  showForm() {
    console.log(this.tcpudpAppFormGroup);
  }

  forbiddenAppName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'MyApp') {
          resolve({'emailIsForbidden': true});
        }
        else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }



}
