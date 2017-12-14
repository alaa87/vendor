import { Routes, RouterModule }  from '@angular/router';

import { VendorReviewComponent } from './vendor-review.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: VendorReviewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
