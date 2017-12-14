import { Routes, RouterModule }  from '@angular/router';

import { VendorObjectionComponent } from './vendor-objection.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: VendorObjectionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
