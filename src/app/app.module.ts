import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatIconModule, MatSidenavModule} from '@angular/material';
import { FuseToolbarModule } from 'app/main/toolbar/toolbar.module';
import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseSampleModule } from './main/content/sample/sample.module';
import {FuseDemoModule} from '../@fuse/components';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import {LoginModule} from './login/login.module';
import { AvatarModule } from 'ng2-avatar';
import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/components/common/messageservice';


const appRoutes: Routes = [
  {
    path      : '',
    component: LoginComponent
  },
    {
        path      : 'main',
        loadChildren: './main/main.module#FuseMainModule'
    },
  {
    path      : 'sdwan-policy',
    loadChildren: './appqos/appqos.module#AppqosModule'
  },
  {
    path      : 'tasks',
    loadChildren: './taskviewer/taskviewer.module#TaskviewerModule'
  }
];

@NgModule({
    declarations: [
        AppComponent



    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseSampleModule,
        FuseDemoModule,
        FuseToolbarModule,
        MatIconModule,
        MatSidenavModule,
        AngularFireModule.initializeApp(environment.firebase, 'izo-portal'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        LoginModule,
        GrowlModule,
        AvatarModule.forRoot(),
        RouterModule.forRoot(appRoutes),
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [MessageService]
})
export class AppModule
{
}
