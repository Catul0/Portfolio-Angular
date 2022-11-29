import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Proyecto } from '../../Portfolio';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  @Output() onAddProyect: EventEmitter<Proyecto> = new EventEmitter();
  id: number=0;
  title: string="";
  text: string="";
  photo: string="./assets/imagenes/default.png";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title){
      alert("Por favor añade un nombre");
      return
    }
    const {id,photo,title,text} = this
    const newProyect = {id,photo,title,text}

    this.onAddProyect.emit(newProyect);
  }
}
