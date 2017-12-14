import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { RfqEntryComponent } from './rfq-entry.component';
import { routing } from './rfq-entry.routing';
import { PanelModule, DataTableModule, ButtonModule, DialogModule, DropdownModule, FileUploadModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    PanelModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
  ],
  declarations: [
    RfqEntryComponent,
  ],
})
export class RfqEntryModule {}
