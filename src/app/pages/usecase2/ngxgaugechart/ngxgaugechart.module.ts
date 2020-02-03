import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, } from '@nebular/theme';

import { ThemeModule } from '../../../@theme/theme.module';
import { NgxGaugeChartComponent } from './ngxgaugechart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Api2Service } from '../../../services/api2.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    FormsModule,
  ],
  declarations: [
    NgxGaugeChartComponent,
  ],
  providers:    [ Api2Service ],
})
export class NgxGaugeChartModule { }
