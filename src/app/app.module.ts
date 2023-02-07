import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginasModule } from './paginas/paginas.module';
import { RutasModule } from './rutas.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
  BrowserModule,
  RutasModule,
  RouterModule,
  PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
