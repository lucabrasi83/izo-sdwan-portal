import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { BrowserModule } from '@angular/platform-browser';
import { FuseStaticRouteComponent } from './fuse-static-route/fuse-static-route.component';


@NgModule({
    declarations: [
        FuseMainComponent,
        FuseStaticRouteComponent

    ],
    imports     : [
        RouterModule,
      NgxDatatableModule,
      BrowserModule,
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
      MatTooltipModule






    ],
    exports     : [
        FuseMainComponent
    ],
  entryComponents: [FuseStaticRouteComponent]
})
export class FuseMainModule
{
}
