import { Component, OnInit } from '@angular/core';
import { Info } from '../../Portfolio';
import { INFORMACION } from '../../mock-informacion';

@Component({
  selector: 'app-targeta-informacion',
  templateUrl: './targeta-informacion.component.html',
  styleUrls: ['./targeta-informacion.component.css']
})
export class TargetaInformacionComponent implements OnInit {
  info: Info[] = INFORMACION;
  constructor() { }

  ngOnInit(): void {
  }

}
