import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UseCase1Module } from './usecase1/usecase1.module';
import { PagesRoutingModule } from './pages-routing.module';
import { D3RadarModule } from './usecase1/ngxradar/ngxradar.module';
import { D3HeatmapModule } from './usecase1/ngxheatmap/heatmap.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    UseCase1Module,
    D3RadarModule,
    D3HeatmapModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
