import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeschaeftspartnerRoutingModule } from './geschaeftspartner-routing.module';
import { GeschaeftspartnerComponent } from './geschaeftspartner.component';

@NgModule({
  declarations: [GeschaeftspartnerComponent],
  imports: [
    CommonModule,
    GeschaeftspartnerRoutingModule,
  ]
})
export class GeschaeftspartnerModule { }
