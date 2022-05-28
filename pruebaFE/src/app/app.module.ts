import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LibroComponent } from './libro/libro.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { ScannerCodeComponent } from './scanner-code/scanner-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LibroComponent,
    TableComponent,
    SearchComponent,
    CartComponent,
    ScannerCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
