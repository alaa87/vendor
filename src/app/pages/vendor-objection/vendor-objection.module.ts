import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { VendorObjectionComponent } from './vendor-objection.component';
import { routing } from './vendor-objection.routing';
import { DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    DataTableModule,
    ButtonModule,
    DialogModule,
  ],
  declarations: [
    VendorObjectionComponent,
  ]
})
export class VendorObjectionModule {}
