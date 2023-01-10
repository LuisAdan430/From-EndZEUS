import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  empleados: any[] = [];
  public page: number = 0;
  constructor(
    private employeesService: EmployeesService
  ) { }
   
  ngOnInit(): void {
    
    this.employeesService.obtenerListadodeUsuarios().subscribe( (response: any) => {
      console.log('Respuesta: ', response);
      this.empleados = response.data.employees;
    }, error => {
      console.error('Error: ', error);
    });
  }

 
  
  

  
  

}
