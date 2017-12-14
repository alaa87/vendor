import { Routes, RouterModule }  from '@angular/router';

import { VendorObjectionDetailsComponent } from './vendor-objection-details.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: VendorObjectionDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
