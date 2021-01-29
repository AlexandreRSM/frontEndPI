import { CategoriaService } from './../service/categoria.service';
import { Router } from '@angular/router';
import { Categoria } from './../Model/Categoria';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  categoria : Categoria = new Categoria()
  listaCategorias : Categoria[]

  constructor(
    private router : Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    if(environment.token ==''){
      this.router.navigate(['/entrar'])
    }
    this.findAllCategorias()
  }
  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  cadastrar(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp : Categoria) =>{
      this.categoria = resp
      alert('Categoria cadastrada com sucesso')
      this.findAllCategorias()
      this.categoria = new Categoria()
    })
  }

}
