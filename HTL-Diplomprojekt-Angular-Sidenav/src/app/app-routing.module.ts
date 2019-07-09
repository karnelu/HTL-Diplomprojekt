import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'geschaeftspartner',
    loadChildren: './geschaeftspartner/geschaeftspartner.module#GeschaeftspartnerModule'
  },
  {
    path: 'fahrzeuge',
    loadChildren: './fahrzeuge/fahrzeuge.module#FahrzeugeModule'
  },
  {
    path: 'termine',
    loadChildren: './termine/termine.module#TermineModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
