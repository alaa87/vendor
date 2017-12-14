import { Routes, RouterModule }  from '@angular/router';

import { UserProfileComponent } from './user-profile.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
