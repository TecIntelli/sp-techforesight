import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../../@theme/theme.module';
import { NGXBarChartComponent } from './ngxbarchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Api2Service } from '../../../services/api2.service';




@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
  ],
  declarations: [
    NGXBarChartComponent,
  ],
  providers:    [ Api2Service ]
})
export class NgxbarchartModule { }
