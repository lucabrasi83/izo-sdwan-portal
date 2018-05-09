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
import { FuseMainComponent} from './main/main.component';
import { FuseSampleModule } from './main/content/sample/sample.module';
import {FuseMainModule} from './main/main.module';
import {FuseDemoModule} from '../@fuse/components';
import { TaskviewerComponent } from './taskviewer/taskviewer.component';
import {TaskviewerModule} from './taskviewer/taskviewer.module';
import {AppqosModule} from './appqos/appqos.module';
import {AppqosComponent} from './appqos/appqos.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';
import {LoginModule} from './login/login.module';

const appRoutes: Routes = [
  {
    path      : '',
    component: LoginComponent
  },
    {
        path      : 'main',
        component: FuseMainComponent
    },
  {
    path      : 'appqos',
    component: AppqosComponent
  },
  {
    path      : 'tasks',
    component: TaskviewerComponent
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
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
      FuseMainModule,
        FuseSampleModule,
      FuseDemoModule,
      TaskviewerModule,
      FuseToolbarModule,
      MatIconModule,
      MatSidenavModule,
      AppqosModule,
      AngularFireModule.initializeApp(environment.firebase, 'izo-portal'),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      LoginModule

    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [LoginService]
})
export class AppModule
{
}
