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

  deleteNota(id: number){
    this.notasService.delete(id);

  }

  filtro(query: string){
    query = query.toLowerCase().trim();
    
    let allResults: Nota[] = new Array<Nota>();

    let terms: string[] = query.split(' ');

    terms = this.borrarDuplicadas(terms);

  }

  borrarDuplicadas(arr: Array<any>) : Array<any> {
    let uniqueResults: Set<any> = new Set<any>();

    arr.forEach(e => uniqueResults.add(e));

    return Array.from(uniqueResults);
  } 

  relevantNotes(query: string){
    query = query.toLowerCase().trim();
    let relevantNotes = this.notas.filter(nota => {
      if(nota.body.toLowerCase().includes(query) || nota.titulo.toLowerCase().includes(query)){
        return true;
      }
      return false;
    })


  }
}
