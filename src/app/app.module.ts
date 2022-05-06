import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticulosInsertComponent } from './articulos-insert/articulos-insert.component';
import { ArticulosUpdateComponent } from './articulos-update/articulos-update.component';
import { ArticulosDeleteComponent } from './articulos-delete/articulos-delete.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ArticulosInsertComponent,
    ArticulosUpdateComponent,
    ArticulosDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
