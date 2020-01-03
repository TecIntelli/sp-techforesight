import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { D3HeatmapComponent } from './heatmap.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
  ],
  declarations: [
    D3HeatmapComponent,
  ],
})
export class D3HeatmapModule { }
