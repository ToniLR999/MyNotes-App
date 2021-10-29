import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Nota } from 'src/app/shared/nota.model';
import { NotasService } from 'src/app/shared/notas.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent implements OnInit {

  notas: Nota[] = new Array<Nota>();
  notasFiltradas : Nota[] = new Array<Nota>();

  @ViewChild('filterInput')
  filterInputElRef!: ElementRef<HTMLInputElement>;

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notas = this.notasService.getAll();
    this.notasFiltradas = this.notasService.getAll();
  }

  deleteNota(nota: Nota){
    let NotaId = this.notasService.getId(nota);
    this.notasService.delete(NotaId);
    this.filtro(this.filterInputElRef.nativeElement.value);

  }

  filtro(query: string){
    query = query.toLowerCase().trim();
    
    let allResults: Nota[] = new Array<Nota>();

    let terms: string[] = query.split(' ');

    terms = this.borrarDuplicadas(terms);

    terms.forEach(term => {
      let results = this.relevantNotes(term);

      allResults = [...allResults, ...results]

    });

    let uniqueResults = this.borrarDuplicadas(allResults);
    this.notasFiltradas = uniqueResults;

    this.ordenarPorRelevancia(allResults);

  }

  generateNoteUrl(nota : Nota){
    let NotaId = this.notasService.getId(nota);
    return NotaId;

  }

  borrarDuplicadas(arr: Array<any>) : Array<any> {
    let uniqueResults: Set<any> = new Set<any>();

    arr.forEach(e => uniqueResults.add(e));

    return Array.from(uniqueResults);
  } 

  relevantNotes(query: string) : Array<Nota>{
    query = query.toLowerCase().trim();
    let relevantNotes = this.notas.filter(nota => {
      if(nota.titulo && nota.titulo.toLowerCase().includes(query)){
        return true;
      }
      if(nota.body && nota.body.toLowerCase().includes(query)){
        return true;
      }
        return false;
    })

    return relevantNotes;
  }

  ordenarPorRelevancia(resultados: Nota[]){

    let noteCountObj: any = {};

    resultados.forEach(nota => {

      let noteId = this.notasService.getId(nota);

      if(noteCountObj[noteId]){
        noteCountObj[noteId] += 1;



      }else {
        noteCountObj[noteId] = 1;

      }


    })

    this.notasFiltradas = this.notasFiltradas.sort((a: Nota, b: Nota) => {
      let aId = this.notasService.getId(a);
      let bId = this.notasService.getId(b);

      let aCount = noteCountObj[aId];
      let bCount = noteCountObj[bId];

      return bCount - aCount;
    })
  }
}
