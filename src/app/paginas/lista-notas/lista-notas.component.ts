import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/shared/nota.model';
import { NotasService } from 'src/app/shared/notas.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent implements OnInit {

  notas: Nota[] = new Array<Nota>();

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notas = this.notasService.getAll();
  }

  deleteNote(id: number){
    this.notasService.delete(id);

  }
}
