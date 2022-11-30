import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddProyect: boolean=false;
  private subject = new Subject<any>();
  constructor() { }
  
  toggleAddProyect():void{
    this.showAddProyect = !this.showAddProyect;
    this.subject.next(this.showAddProyect);
  }

  onToggle():Observable<any>{
     return this.subject.asObservable();
  }

}
