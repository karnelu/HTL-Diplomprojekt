// Modules
import { BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { TermineComponent } from './termine/termine.component';
import { FahrzeugeComponent } from './fahrzeuge/fahrzeuge.component';
import { GeschaeftspartnerComponent } from './geschaeftspartner/geschaeftspartner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Angular Material Section
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FahrzeugeComponent,
    GeschaeftspartnerComponent,
    TermineComponent,
    ToolbarComponent,
    QrScannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Angular Material Imports
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,

  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
