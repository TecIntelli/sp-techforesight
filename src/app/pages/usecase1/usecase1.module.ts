import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UseCase1Component } from './usecase1.component';
import { ApiService } from '../../services/api1.service';
import { UsedataService } from '../../services/usedata1.service';
import { NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    UseCase1Component,
  ],
  providers: [ApiService, UsedataService ],
})
export class UseCase1Module { }
