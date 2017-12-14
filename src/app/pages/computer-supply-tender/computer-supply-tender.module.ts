import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { ComputerSupplyTenderComponent } from './computer-supply-tender.component';
import { routing } from './computer-supply-tender.routing';
import { CalendarModule, DataTableModule, ButtonModule, DialogModule, InputTextModule, CheckboxModule, InputTextareaModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    CalendarModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    InputTextareaModule,
  ],
  declarations: [
    ComputerSupplyTenderComponent,
  ],
})
export class ComputerSupplyTenderModule {}
