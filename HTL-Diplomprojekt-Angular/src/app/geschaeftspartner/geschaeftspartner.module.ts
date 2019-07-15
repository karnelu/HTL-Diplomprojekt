import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeschaeftspartnerComponent } from './geschaeftspartner.component';
import { GeschaeftspartnerSucheComponent } from './geschaeftspartner-suche/geschaeftspartner-suche.component';
import { GeschaeftspartnerDetailComponent } from './geschaeftspartner-detail/geschaeftspartner-detail.component';

@NgModule({
  declarations: [GeschaeftspartnerComponent, GeschaeftspartnerSucheComponent, GeschaeftspartnerDetailComponent],
  imports: [
    CommonModule,
  ],
})
export class GeschaeftspartnerModule { }
