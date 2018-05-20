import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseNavigationModule, FuseSearchBarModule, FuseShortcutsModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatRadioModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';

import { FuseMainComponent } from './main.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FuseStaticRouteComponent } from './fuse-static-route/fuse-static-route.component';
import {AuthguardService} from '../authguard/authguard.service';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: FuseMainComponent,
    canActivate: [AuthguardService]
  }
];

@NgModule({
    declarations: [
        FuseMainComponent,
        FuseStaticRouteComponent

    ],
    imports     : [
        RouterModule,
      NgxDatatableModule,
      CommonModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatRadioModule,
        FuseSharedModule,
      MatChipsModule,
      MatSlideToggleModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
        FuseThemeOptionsModule,
        FuseNavigationModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        FuseSidebarModule,
      MatSelectModule,
      MatTooltipModule,
      RouterModule.forChild(routes)


    ],
    exports     : [
        FuseMainComponent
    ],
  entryComponents: [FuseStaticRouteComponent]
})
export class FuseMainModule
{
}
