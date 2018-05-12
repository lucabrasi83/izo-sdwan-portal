import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {TaskviewerComponent} from './taskviewer.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSortModule,
        MatChipsModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatTooltipModule
        } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FuseSharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSelectModule,
    NgxDatatableModule,
    MatButtonModule,
    MatTooltipModule

  ],
  declarations: [TaskviewerComponent],
  exports: [
    TaskviewerComponent
  ]

})
export class TaskviewerModule { }
