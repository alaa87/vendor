import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { VendorReviewComponent } from './vendor-review.component';
import { routing } from './vendor-review.routing';
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
    VendorReviewComponent,
  ],
})
export class VendorReviewModule {}
