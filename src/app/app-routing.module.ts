import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from '../app/pages/dashboard/dashboard.component';
import {LandingComponent} from '../app/pages/landing/landing.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
