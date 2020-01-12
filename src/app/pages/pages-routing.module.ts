import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UseCase1Component } from './usecase1/usecase1.component';
import { NGXRadarComponent } from './usecase1/ngxradar/ngxradar.component';
import { D3HeatmapComponent } from './usecase1/ngxheatmap/heatmap.component';

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
      component: D3HeatmapComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
