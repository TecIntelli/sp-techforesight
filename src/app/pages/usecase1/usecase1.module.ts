import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UseCase1Component } from './usecase1.component';
import { ApiService } from '../../services/api.service';
import { UsedataService } from '../../services/usedata.service';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    UseCase1Component,
  ],
  providers: [ApiService, UsedataService ],
})
export class UseCase1Module { }
