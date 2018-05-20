import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'fuse-predef-dialog',
  templateUrl: './fuse-predef-dialog.component.html',
  styleUrls: ['./fuse-predef-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FusePredefDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<FusePredefDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

}
