import { Routes, RouterModule }  from '@angular/router';

import { DetailedOfferComponent } from './detailed-offer.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: DetailedOfferComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
