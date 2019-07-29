import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarFullscreenDialogComponent } from './toolbar-fullscreen-dialog/toolbar-fullscreen-dialog.component';
import { MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [ToolbarFullscreenDialogComponent],


  imports: [
    CommonModule,




    // Angular Material
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,


    ToolbarRoutingModule,
  ],
  exports: [
    ToolbarFullscreenDialogComponent,
  ],

})
export class ToolbarModule { }



