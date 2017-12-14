import { Routes, RouterModule }  from '@angular/router';

import { ComparisonSheetComponent } from './comparison-sheet.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ComparisonSheetComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
