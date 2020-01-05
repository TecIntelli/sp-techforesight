import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { NGXRadarComponent } from './ngxradar/ngxradar.component';
import { D3HeatmapComponent } from './heatmap/heatmap.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'test',
      component: TestComponent,
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
