import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UseCase1Component } from './usecase1/usecase1.component';
import { UseCase2Component } from './usecase2/usecase2.component';
import { UseCase3Component } from './usecase3/usecase3.component';
import { NGXRadarComponent } from './usecase1/ngxradar/ngxradar.component';
import { NGXHeatmapComponent } from './usecase1/ngxheatmap/heatmap.component';
import { NGXBarChartComponent } from './usecase2/ngxbarchart/ngxbarchart.component';
import { NgxGaugeChartComponent } from './usecase2/ngxgaugechart/ngxgaugechart.component';
import { LoadDataComponent } from './usecase3/load-data/load-data.component';
import { NgxHorizontalBarChartComponent } from './usecase3/ngx-horizontalbarchart/ngx-horizontalbarchart.component';
import { NgxBubbleChartComponent } from './usecase3/ngx-bubblechart/ngx-bubblechart.component';


// die einzelnen Komponenten, welche über das Menü verfügbar sein sollen, müssen dem entsprechenden Menüpunkt zugeordnet werden
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'TechnologydataApplication',
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
    {
      path: 'TechnologydataExpert',
      component: UseCase2Component,
    },
    {
      path: 'SponsorshipCatalogue',
      component: UseCase3Component,
    },
    {
      path: 'LoadCSV',
      component: LoadDataComponent,
    },
    {
      path: 'HorizontalBarChart',
      component: NgxHorizontalBarChartComponent,
    },
    {
      path: 'BubbleChart',
      component: NgxBubbleChartComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
