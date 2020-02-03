import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UseCase2Component } from './usecase2.component';
import { Api2Service } from '../../services/api2.service';
import { Usedata2Service } from '../../services/usedata2.service';

import { NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [
    UseCase2Component,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
  ],
  providers: [Api2Service, Usedata2Service ],
})
export class Usecase2Module { }
