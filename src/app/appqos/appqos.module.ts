import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppqosComponent } from './appqos.component';
import {
  MatIconModule,
  MatSidenavModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatChipsModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatDialogModule,
  MatToolbarModule,
  MatDividerModule,
  MatCheckboxModule
} from '@angular/material';
import { FuseToolbarModule } from 'app/main/toolbar/toolbar.module';
import {RouterModule, Routes} from '@angular/router';
import { PredefinedComponent } from './predefined/predefined.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { FuseSharedModule } from '../../@fuse/shared.module';
import { FusePredefDialogComponent } from './predefined/fuse-predef-dialog/fuse-predef-dialog.component';
import {AuthguardService} from '../authguard/authguard.service';

const routes: Routes = [
  {
    path: '',
    component: AppqosComponent,
    canActivate: [AuthguardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    FuseToolbarModule,
    MatCardModule,
    NgxDatatableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    FormsModule,
    MatExpansionModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)

  ],
  declarations: [AppqosComponent, PredefinedComponent, FusePredefDialogComponent],
  entryComponents: [FusePredefDialogComponent],
  exports: [AppqosComponent]
})
export class AppqosModule { }
