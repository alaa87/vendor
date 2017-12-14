import { Routes, RouterModule }  from '@angular/router';

import { ComputerSupplyTenderComponent } from './computer-supply-tender.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ComputerSupplyTenderComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
