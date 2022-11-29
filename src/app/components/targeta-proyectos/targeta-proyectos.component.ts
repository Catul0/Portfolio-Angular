import { Component, OnInit } from '@angular/core';
import { Proyecto} from '../../Portfolio';
import { ProyectosService } from '../../service/proyectos.service';
@Component({
  selector: 'app-targeta-proyectos',
  templateUrl: './targeta-proyectos.component.html',
  styleUrls: ['./targeta-proyectos.component.css']
})
export class TargetaProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(
    private proyectosService: ProyectosService
  ) { }

  ngOnInit(): void {
    this.proyectosService.getProyecto().subscribe( proyectos =>
      this.proyectos = proyectos
    );
  }
  deleteProyect( proyecto: Proyecto){
    this.proyectosService.deleteProyect(proyecto)
    .subscribe(
        ()=> {
      this.proyectos = this.proyectos.filter( (t) =>{
        return t.id !== proyecto.id
      })
    })
  }
  addProyect(proyecto: Proyecto){
    this.proyectosService.addProyect(proyecto).subscribe((proyecto)=>(
      this.proyectos.push(proyecto)
    ))
  }

}
