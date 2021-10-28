import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-carta-notas',
  templateUrl: './carta-notas.component.html',
  styleUrls: ['./carta-notas.component.scss']
})
export class CartaNotasComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;
  @Input() link!: number;

  @Output('delete') deleteEvent: EventEmitter<void>= new EventEmitter<void>();

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

  onXButtonClick(){

    this.deleteEvent.emit();
  }

}
