import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private baseURL = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/luis";

  constructor( private HttpClient : HttpClient) { }

  obtenerListadodeUsuarios():Observable<any[]>{
    return this.HttpClient.get<any[]>(`${this.baseURL}`);

  }
}
