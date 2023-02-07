import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';

const ruta:Routes=[
    {
    path: 'index',
    component: InicioComponent
    },
    {
    path: 'inicio',
    component: InicioComponent
    },
    {
      path:'acerca',
      loadChildren: () => import('./paginas/acerca/acerca.module').then(m=>m.AcercaModule)
    },
    {
      path:'galeria',
      loadChildren: () => import('./paginas/galeria/galeria.module').then(m=>m.GaleriaModule)
    },
    {
      path:'contacto',
      loadChildren: () => import('./paginas/contacto/contacto.module').then(m=>m.ContactoModule)
    },
    {
      path:'',
      component: InicioComponent
    },
    {
      path:'**',
      loadChildren: () => import('./paginas/no-encuentra/no-encuentra.module').then(m=>m.NoEncuentraModule)
    }
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(ruta)
  ]
})
export class RutasModule { }
