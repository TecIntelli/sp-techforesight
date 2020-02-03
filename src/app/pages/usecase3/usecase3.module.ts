import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

import { UseCase3Component } from './usecase3.component';
import { Usedata3Service } from '../../services/usedata3.service';
import { NbButtonModule, NbInputModule, NbSelectModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { LoadDataComponent } from './load-data/load-data.component';
import { NgxPiechartgridComponent } from './ngx-piechartgrid/ngx-piechartgrid.component';



@NgModule({
  declarations: [
    UseCase3Component,
    LoadDataComponent,
    NgxPiechartgridComponent,
  ],
  imports: [
    CommonModule,
    NgxCsvParserModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    Ng2SmartTableModule,
    NgxChartsModule,
    FormsModule,
  ],
  providers: [ Usedata3Service ],
})
export class Usecase3Module { }
