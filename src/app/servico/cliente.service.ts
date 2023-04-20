import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string = 'http://localhost:8080';

  // Construtor
  constructor(private http:HttpClient) { }

  // Metodo para selecionar todos os clientes
  selecionar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }
}
