import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'fuse-static-route',
  templateUrl: './fuse-static-route.component.html',
  styleUrls: ['./fuse-static-route.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FuseStaticRouteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FuseStaticRouteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {


  }

  ngOnInit() {
  }

}
