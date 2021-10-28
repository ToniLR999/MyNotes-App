import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesNotasComponent } from './paginas/detalles-notas/detalles-notas.component';
import { ListaNotasComponent } from './paginas/lista-notas/lista-notas.component';
import { MainLayoutComponent } from './paginas/main-layout/main-layout.component';

const routes: Routes = [
  {path: '',component: MainLayoutComponent, children: [{  path: '',component: ListaNotasComponent},
  {path: ':id',component: DetallesNotasComponent}

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
