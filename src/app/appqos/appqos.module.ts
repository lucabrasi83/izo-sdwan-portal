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
  MatButtonModule,
  MatChipsModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatDialogModule,
  MatToolbarModule,
  MatDividerModule,
  MatCheckboxModule,
  MatStepperModule

} from '@angular/material';

import { FuseToolbarModule } from 'app/main/toolbar/toolbar.module';
import {RouterModule, Routes} from '@angular/router';
import { PredefinedComponent } from './predefined/predefined.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseSharedModule } from '../../@fuse/shared.module';
import { FusePredefDialogComponent } from './predefined/fuse-predef-dialog/fuse-predef-dialog.component';
import {AuthguardService} from '../authguard/authguard.service';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { CustomComponent } from './custom/custom.component';


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
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    MatCheckboxModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.circleSwish,
      backdropBackgroundColour: 'rgba(255,255,255,0.8)',
      primaryColour: '#03a9f4',
      secondaryColour: '#03a9f4',
      tertiaryColour: '#03a9f4'
    }),
    RouterModule.forChild(routes)

  ],
  declarations: [AppqosComponent, PredefinedComponent, FusePredefDialogComponent, CustomComponent],
  entryComponents: [FusePredefDialogComponent, CustomComponent],
  exports: [AppqosComponent]
})
export class AppqosModule { }
