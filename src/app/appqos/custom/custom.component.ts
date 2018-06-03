import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'fuse-custom-create',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomComponent implements OnInit {

  constructor(public dialogRefCustom: MatDialogRef<CustomComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _formBuilder: FormBuilder) { }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
