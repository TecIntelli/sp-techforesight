import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UseCase1Component } from './usecase1.component';
import { ApiService } from '../../services/api.service';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    UseCase1Component,
  ],
  providers: [ApiService],
})
export class UseCase1Module { }
