import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carta-notas',
  templateUrl: './carta-notas.component.html',
  styleUrls: ['./carta-notas.component.scss']
})
export class CartaNotasComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;

  @ViewChild('truncator',{static:true}) truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText',{static:true}) bodyText!: ElementRef<HTMLElement>;



  constructor(private renderer: Renderer2) { }

  ngOnInit() {

    let style = window.getComputedStyle(this.bodyText!.nativeElement);
    let viewableHeight= parseInt(style.getPropertyValue("height"), 10);

    if(this.bodyText!.nativeElement.scrollHeight > viewableHeight){
      this.renderer.setStyle(this.truncator?.nativeElement, 'display', 'block')


    }else{

      this.renderer.setStyle(this.truncator?.nativeElement,'display','none');
    }
  }

}
