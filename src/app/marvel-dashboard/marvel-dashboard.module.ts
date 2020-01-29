import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarvelDashboardRoutingModule } from './marvel-dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MarvelDashboardRoutingModule
  ]
})
export class MarvelDashboardModule { }
