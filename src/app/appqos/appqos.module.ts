import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppqosComponent } from './appqos.component';
import {MatIconModule,
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
        MatExpansionModule
        } from '@angular/material';
import { FuseToolbarModule } from 'app/main/toolbar/toolbar.module';
import {RouterModule} from '@angular/router';
import { PredefinedComponent } from './predefined/predefined.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { FuseSharedModule } from '../../@fuse/shared.module';


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
    MatExpansionModule

  ],
  declarations: [AppqosComponent, PredefinedComponent],
  exports: [AppqosComponent, PredefinedComponent]
})
export class AppqosModule { }
