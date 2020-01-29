import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';


import { ThemeModule } from '../../../@theme/theme.module';
import { NGXHeatmapComponent } from './heatmap.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
    NbEvaIconsModule,
    NbIconModule,
  ],
  declarations: [
    NGXHeatmapComponent,
  ],
})
export class NGXHeatmapModule { }
