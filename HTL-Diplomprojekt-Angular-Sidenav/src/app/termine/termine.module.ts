import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermineRoutingModule } from './termine-routing.module';
import { TermineComponent } from './termine.component';


@NgModule({
  declarations: [TermineComponent],
  imports: [
    CommonModule,
    TermineRoutingModule,
  ]
})
export class TermineModule { }
