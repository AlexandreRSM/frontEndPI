import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../Model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/prod', this.token)
  }
  getByIdProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`http://localhost:8080/prod/${id}`, this.token)
  }
  getByNomeProduto(nome : string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`http://localhost:8080/prod/nome/${nome}`, this.token)
  }
  getByRegiaoProduto(regiao : string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`http://localhost:8080/prod/regiao/${regiao}`, this.token)
  } 

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('http://localhost:8080/prod', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('http://localhost:8080/prod', produto, this.token)
  }
  
  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/prod/${id}`, this.token)
  }

}
