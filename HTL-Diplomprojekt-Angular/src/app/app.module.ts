// Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FahrzeugeDetailComponent } from './fahrzeuge-detail/fahrzeuge-detail.component';
import { GeschaeftspartnerDetailComponent } from './geschaeftspartner-detail/geschaeftspartner-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FahrzeugeComponent,
    GeschaeftspartnerComponent,
    TermineComponent,
    ToolbarComponent,
    QrScannerComponent,
    FahrzeugeDetailComponent,
    GeschaeftspartnerDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    // Angular Material Imports
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    ScrollingModule,
    ScrollDispatchModule,

  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
