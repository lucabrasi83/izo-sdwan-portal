import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
import {AuthguardService} from '../authguard/authguard.service';

const routes: Routes = [
  {
    path: '',
    component: TaskviewerComponent,
    canActivate: [AuthguardService]
  }
];
@NgModule({
  imports: [
    CommonModule,
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
    MatTooltipModule,
    RouterModule.forChild(routes)

  ],
  declarations: [TaskviewerComponent],
  exports: [
    TaskviewerComponent
  ]

})
export class TaskviewerModule { }
