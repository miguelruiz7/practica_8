import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NoEncuentraComponent } from './no-encuentra/no-encuentra.component';
import { AcercaComponent } from './acerca/acerca.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';




@NgModule({
  declarations: [
    InicioComponent,
    NoEncuentraComponent,
    AcercaComponent,
    GaleriaComponent,
    ContactoComponent
  ],
  exports: [
    InicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
