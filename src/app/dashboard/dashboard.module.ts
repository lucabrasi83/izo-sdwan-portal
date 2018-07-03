import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {AuthguardService} from '../authguard/authguard.service';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import {AgmCoreModule } from '@agm/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { MatCardModule, MatIconModule, MatChipsModule, MatExpansionModule, MatButtonModule } from '@angular/material';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthguardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    AgmCoreModule.forRoot(
      {
        apiKey: 'AIzaSyAqkFLvUNq3PXDBJdeRGnEkJeFiDAWO7rc'}
        ),
    AgmJsMarkerClustererModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonModule
  ],
  declarations: [DashboardComponent]
})



export class DashboardModule { }
