import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './layout/chart/chart.component';
import { TicketComponent } from './layout/ticket/ticket.component';
import { SearchComponent } from './layout/search/search.component';
import { TableComponent } from './layout/table/table.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TicketComponent,
    SearchComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
