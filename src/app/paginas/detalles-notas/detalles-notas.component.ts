import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Nota } from 'src/app/shared/nota.model';
import { NotasService } from 'src/app/shared/notas.service';

@Component({
  selector: 'app-detalles-notas',
  templateUrl: './detalles-notas.component.html',
  styleUrls: ['./detalles-notas.component.scss']
})
export class DetallesNotasComponent implements OnInit {

  nota!: Nota;

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.nota = new Nota();
  }

  onSubmit(form: NgForm){

    this.notasService.add(form.value);

  }


}
