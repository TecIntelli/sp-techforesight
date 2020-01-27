import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../../@theme/theme.module';
import { D3HeatmapComponent } from './heatmap.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApiService } from '../../../services/api.service';
import { UsedataService } from '../../../services/usedata.service';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
  ],
  declarations: [
    D3HeatmapComponent,
  ],
  providers: [ApiService, UsedataService ],
})
export class D3HeatmapModule { }
