import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { TestModule } from './test/test.module';
import { PagesRoutingModule } from './pages-routing.module';
import { D3RadarModule } from './ngxradar/ngxradar.module';
import { D3HeatmapModule } from './heatmap/heatmap.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    TestModule,
    D3RadarModule,
    D3HeatmapModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
