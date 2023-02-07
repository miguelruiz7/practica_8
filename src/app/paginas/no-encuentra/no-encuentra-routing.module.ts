import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoEncuentraComponent } from './no-encuentra.component';

const routes: Routes = [
  {
    path: '',
    component:NoEncuentraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoEncuentraRoutingModule { }
