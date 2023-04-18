import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalRegistroComponent } from './components/modal-registro/modal-registro.component';
import { ModalSeguimientoComponent } from './components/modal-seguimiento/modal-seguimiento.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalRegistroComponent,
    ModalSeguimientoComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
