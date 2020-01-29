import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UseCase1Component } from './usecase1/usecase1.component';
import { NGXRadarComponent } from './usecase1/ngxradar/ngxradar.component';
import { NGXHeatmapComponent } from './usecase1/ngxheatmap/heatmap.component';
import { NGXBarChartComponent } from './usecase2/ngxbarchart/ngxbarchart.component';
import { NgxGaugeChartComponent } from './usecase2/ngxgaugechart/ngxgaugechart.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'Technologydata',
      component: UseCase1Component,
    },
    {
      path: 'Radar',
      component: NGXRadarComponent,
    },
    {
      path: 'Heatmap',
      component: NGXHeatmapComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'GroupedBarChart',
      component: NGXBarChartComponent,
    },
    {
      path: 'GaugeChart',
      component: NgxGaugeChartComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
