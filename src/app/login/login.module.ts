import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        MatChipsModule,
        MatIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FuseSharedModule } from '@fuse/shared.module';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule,
    MatProgressBarModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: [LoginComponent]

})
export class LoginModule { }
