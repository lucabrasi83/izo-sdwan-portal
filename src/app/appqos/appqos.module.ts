import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppqosComponent } from './appqos.component';
import {MatIconModule, MatSidenavModule} from '@angular/material';
import { FuseToolbarModule } from 'app/main/toolbar/toolbar.module';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    FuseToolbarModule,
    MatCardModule
  ],
  declarations: [AppqosComponent],
  exports: [AppqosComponent]
})
export class AppqosModule { }
