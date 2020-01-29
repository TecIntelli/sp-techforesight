import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UseCase2Component } from './usecase2.component';
import { Api1Service } from '../../services/api1.service';
import { Usedata1Service } from '../../services/usedata1.service';





@NgModule({
  declarations: [
    UseCase2Component,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
  ],
  providers: [Api1Service, Usedata1Service ],
})
export class Usecase2Module { }
