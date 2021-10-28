import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/shared/nota.model';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent implements OnInit {

  notas: Nota[] = new Array<Nota>();

  constructor() { }

  ngOnInit(): void {
  }

}
