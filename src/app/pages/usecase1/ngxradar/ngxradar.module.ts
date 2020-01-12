import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../../@theme/theme.module';
import { NGXRadarComponent } from './ngxradar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
  ],
  declarations: [
    NGXRadarComponent,
  ],
})
export class D3RadarModule { }
