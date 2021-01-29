import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../Model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http:HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/cat', this.token)
  }
  postCategoria(categoria : Categoria):Observable<Categoria>{
    return this.http.post<Categoria>('http://localhost:8080/cat', categoria, this.token)
  }
  
}
