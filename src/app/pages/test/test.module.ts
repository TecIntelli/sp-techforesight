import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TestComponent } from './test.component';
import { ApiService } from '../../services/api.service';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    TestComponent,
  ],
  providers: [ApiService],
})
export class TestModule { }
