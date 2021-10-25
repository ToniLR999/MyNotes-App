import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNotasComponent } from './paginas/lista-notas/lista-notas.component';
import { MainLayoutComponent } from './paginas/main-layout/main-layout.component';
import { CartaNotasComponent } from './carta-notas/carta-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNotasComponent,
    MainLayoutComponent,
    CartaNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
