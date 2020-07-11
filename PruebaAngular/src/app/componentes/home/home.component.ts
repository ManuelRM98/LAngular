import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio/servicio.service'
import { Colaboradores } from '../../modelos/colaboradores.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public colaboradores:Colaboradores[]=[];

  constructor(public servicio:ServicioService) { }

  ngOnInit(): void {
    this.servicio.getData().subscribe(res=>this.organizarDatos(res))
  }

  public organizarDatos(res){
    let colaboradores
    res.map(datos=>{
      colaboradores = new Colaboradores (
        datos.usuarioRed,
        datos.nombre,
        datos.apellido,
        datos.cargo,
        datos.identificacion
      )
      this.colaboradores.push(colaboradores)
    })
    console.log(this.colaboradores)
  }


}
