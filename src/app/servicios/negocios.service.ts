import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Negocio } from '../interfaces/negocios';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  private apiUrl = 'http://localhost:3000/api/negocios';

  private _httpClient = inject(HttpClient)

  public empleados : Negocio[] = [];

  constructor() { }

  getNegocios(): Observable<Negocio[]> {  // Usa la interfaz Negocio[]
    console.log(this.empleados)
    return this._httpClient.get<Negocio[]>(this.apiUrl);
  }
}
