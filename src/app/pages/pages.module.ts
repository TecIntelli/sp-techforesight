import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UseCase1Module } from './usecase1/usecase1.module';
import { PagesRoutingModule } from './pages-routing.module';
import { NGXRadarModule } from './usecase1/ngxradar/ngxradar.module';
import { NGXHeatmapModule } from './usecase1/ngxheatmap/heatmap.module';
import { Usecase2Module } from './usecase2/usecase2.module';
import { NgxbarchartModule } from './usecase2/ngxbarchart/ngxbarchart.module';
import { NgxGaugeChartModule } from './usecase2/ngxgaugechart/ngxgaugechart.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    UseCase1Module,
    NGXRadarModule,
    NGXHeatmapModule,
    Usecase2Module,
    NgxbarchartModule,
    NgxGaugeChartModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
