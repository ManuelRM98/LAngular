import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  @Input() mensajeRecibidoHijo:string;
  @Output() emisionmensaje = new EventEmitter<string>();
  
  public autor:string='Eliana Aguilar Ceballos';
  public year:number=2020;

  constructor() { }

  ngOnInit(): void {
    this.emisionmensaje.emit('Primer proyecto en Angular')


  }

}
