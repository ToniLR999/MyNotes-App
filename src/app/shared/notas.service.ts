import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Nota } from './nota.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  notas: Nota[] = new Array<Nota>();

  constructor() { }

  getAll(){
    return this.notas;

  }

  get(id: number){
    return this.notas[id];

  }

  getId(nota: Nota){
    return this.notas.indexOf(nota);

  }

  add(nota: Nota){
    let newLength = this.notas.push(nota);
    let index = newLength - 1;
    return index;

  }

  update(id:number, title: string, body:string){
    let note = this.notas[id];
    note.titulo = title;
    note.body = body;

  }

  delete(id: number){
    this.notas.splice(id, 1);

  }

}
