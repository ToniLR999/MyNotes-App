import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Nota } from 'src/app/shared/nota.model';
import { NotasService } from 'src/app/shared/notas.service';

@Component({
  selector: 'app-detalles-notas',
  templateUrl: './detalles-notas.component.html',
  styleUrls: ['./detalles-notas.component.scss']
})
export class DetallesNotasComponent implements OnInit {

  nota!: Nota;
  notaId!: number;
  new: boolean = false;

  constructor(private notasService: NotasService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.nota = new Nota();
      console.log(params.id+ " EL ID");
      if (params.id){
        this.nota = this.notasService.get(params.id);
        this.notaId = params.id;
        this.new = false;
      
      }else{
        this.new = true;

      }


    })


  }

  onSubmit(form: NgForm){
    if(this.new){

      console.log("estoy en new ");
      this.notasService.add(form.value);
    this.router.navigateByUrl('/');

    }else{
      console.log("estoy en update");
      this.notasService.update(this.notaId,form.value.titulo,form.value.body)
    }

    this.router.navigateByUrl('/');
    
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
