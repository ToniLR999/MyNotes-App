import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNotasComponent } from './paginas/lista-notas/lista-notas.component';
import { MainLayoutComponent } from './paginas/main-layout/main-layout.component';
import { CartaNotasComponent } from './carta-notas/carta-notas.component';
import { DetallesNotasComponent } from './paginas/detalles-notas/detalles-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNotasComponent,
    MainLayoutComponent,
    CartaNotasComponent,
    DetallesNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
