import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { DetailedOfferComponent } from './detailed-offer.component';
import { routing } from './detailed-offer.routing';
import { DataTableModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    DataTableModule,
    ButtonModule,
    ],
  declarations: [
    DetailedOfferComponent,
  ]
})
export class DetailedOfferModule {}
