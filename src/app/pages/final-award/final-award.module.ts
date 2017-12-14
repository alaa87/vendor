import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { FinalAwardComponent } from './final-award.component';
import { routing } from './final-award.routing';
import { DataTableModule, ButtonModule, ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    DataTableModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
  declarations: [
    FinalAwardComponent,
  ],
  providers:[
    ConfirmationService
  ]
})
export class FinalAwardModule {}
