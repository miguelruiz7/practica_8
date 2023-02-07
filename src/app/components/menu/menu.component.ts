import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit { 
  ngOnInit(): void {

  }

  rutas=[
    {
      name: 'Inicio',
      Path: '/'
    },
    {
      name: 'Acerca',
      Path: '/acerca'
    },
    {
      name: 'Contacto',
      Path: '/contacto'
    },
    {
      name: 'Galeria',
      Path: '/galeria'
    }
  ];

}

