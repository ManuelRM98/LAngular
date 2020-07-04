import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  @Input() mensajeRecibidoHijo:string;
  
  public autor:string='Eliana Aguilar Ceballos';
  public year:number=2020;

  constructor() { }

  ngOnInit(): void {
  }

}
