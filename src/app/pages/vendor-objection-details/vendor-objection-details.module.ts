import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { VendorObjectionDetailsComponent } from './vendor-objection-details.component';
import { routing } from './vendor-objection-details.routing';
import { PanelModule, DataTableModule, ButtonModule, DialogModule, DropdownModule, InputTextModule } from 'primeng/primeng';

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
    InputTextModule,
  ],
  declarations: [
    VendorObjectionDetailsComponent,
  ]
})
export class VendorObjectionDetailsModule {}
