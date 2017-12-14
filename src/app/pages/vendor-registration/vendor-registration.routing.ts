import { Routes, RouterModule }  from '@angular/router';

import { VendorRegistrationComponent } from './vendor-registration.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: VendorRegistrationComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
