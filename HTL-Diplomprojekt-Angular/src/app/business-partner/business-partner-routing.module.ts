import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessPartnerDetailComponent } from './business-partner-detail/business-partner-detail.component';


const routes: Routes = [
  { path: 'business-partner/:id', component: BusinessPartnerDetailComponent, data: { title: 'Business Partner Detail' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessPartnerRoutingModule { }
