import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Proyecto} from '../../Portfolio';
import { PROYECTOS } from '../../mock-informacion';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent implements OnInit {
  @Input() proyect: Proyecto = PROYECTOS[0];
  @Output() onDeleteProyect:EventEmitter<Proyecto>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(proyecto: Proyecto){
    this.onDeleteProyect.emit(proyecto);
  }
}
