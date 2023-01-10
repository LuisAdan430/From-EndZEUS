import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GruposComponent } from './grupos/grupos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'empleados',component:EmpleadosComponent}, 
  {path:'grupos',component:GruposComponent},    
  {path:'inicio',component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
