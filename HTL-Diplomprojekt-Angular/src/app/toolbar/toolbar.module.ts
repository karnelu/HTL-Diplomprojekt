// ##### ANGULAR MODULES ##### \\
import { NgModule } from '@angular/core';

// ##### APP MODULES ##### \\
import { CommonImportsModule } from 'src/common-modules/common-imports.module';
import { ToolbarRoutingModule } from './toolbar-routing.module';

// ##### APP COMPONENTS ##### \
import { ToolbarFullscreenDialogComponent } from './toolbar-fullscreen-dialog/toolbar-fullscreen-dialog.component';

@NgModule({
  declarations: [ToolbarFullscreenDialogComponent],

  imports: [
    CommonImportsModule,
    ToolbarRoutingModule,
  ],
  exports: [
    ToolbarFullscreenDialogComponent,
  ],

})
export class ToolbarModule { }



