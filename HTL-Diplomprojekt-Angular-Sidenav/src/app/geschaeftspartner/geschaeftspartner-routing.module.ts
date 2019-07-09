import { GeschaeftspartnerComponent } from './geschaeftspartner.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'fahrzeuge', component: GeschaeftspartnerComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeschaeftspartnerRoutingModule { }
