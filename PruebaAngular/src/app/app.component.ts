import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaAngular';

  public mensajeParaHijo:string=", !Curso Angular!";
  public mensajeDesdeHijo:string=''

  constructor(public router:Router){

  }


  public recibido(mensaje){
    this.mensajeDesdeHijo=mensaje; 
  }
public redireccion(){
this.router.navigate(['/pag2'])
}
}
