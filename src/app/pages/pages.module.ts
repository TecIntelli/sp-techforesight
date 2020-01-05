import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { TestModule } from './test/test.module';
import { PagesRoutingModule } from './pages-routing.module';
import { D3PieModule } from './ngxradar/ngxradar.module';
import { D3HeatmapModule } from './heatmap/heatmap.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    TestModule,
    D3PieModule,
    D3HeatmapModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
