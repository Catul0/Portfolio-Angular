import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortadaComponent } from './components/portada/portada.component';
import { BotonNavComponent } from './components/boton-nav/boton-nav.component';
import { TargetaInformacionComponent } from './components/targeta-informacion/targeta-informacion.component';
import { TargetaProyectosComponent } from './components/targeta-proyectos/targeta-proyectos.component';
import { ItemProyectoComponent } from './components/item-proyecto/item-proyecto.component';
import { AgregarProyectoComponent } from './components/agregar-proyecto/agregar-proyecto.component';
import { BotonAddComponent } from './components/boton-add/boton-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    BotonNavComponent,
    TargetaInformacionComponent,
    TargetaProyectosComponent,
    ItemProyectoComponent,
    AgregarProyectoComponent,
    BotonAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
