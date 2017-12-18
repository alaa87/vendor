import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { ComparisonSheetComponent } from './comparison-sheet.component';
import { routing } from './comparison-sheet.routing';
import { CalendarModule, DataTableModule, ButtonModule, InputTextareaModule, ConfirmDialogModule,ConfirmationService, InputTextModule } from 'primeng/primeng';

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
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule,
  ],
  declarations: [
    ComparisonSheetComponent,
  ],
  providers:[
    ConfirmationService
  ]
})
export class ComparisonSheetModule {}
