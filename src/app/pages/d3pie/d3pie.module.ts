import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { D3PieComponent } from './d3pie.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    D3PieComponent,
  ],
})
export class D3PieModule { }
