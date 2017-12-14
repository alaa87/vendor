import { Routes, RouterModule }  from '@angular/router';

import { RfqEntryComponent } from './rfq-entry.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: RfqEntryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
