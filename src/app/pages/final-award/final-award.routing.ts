import { Routes, RouterModule }  from '@angular/router';

import { FinalAwardComponent } from './final-award.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: FinalAwardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
