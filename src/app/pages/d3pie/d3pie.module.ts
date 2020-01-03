import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { D3PieComponent } from './d3pie.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
  ],
  declarations: [
    D3PieComponent,
  ],
})
export class D3PieModule { }
