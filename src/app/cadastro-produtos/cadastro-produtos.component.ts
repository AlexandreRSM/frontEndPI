import { AlertService } from './../service/alert.service';
import { Usuario } from './../Model/Usuario';
import { CategoriaService } from './../service/categoria.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../Model/Produto';
import { ProdutoService } from '../service/produto.service';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../Model/Categoria';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  produto : Produto = new Produto()
  listaProdutos : Produto[]
 
  
  
  user : Usuario = new Usuario()
  idUsuario = environment.id

  categoria : Categoria = new Categoria
  listaCategorias : Categoria[]
  idCategoria : number
  key = 'data'
  reverse = true

  constructor(
    private router : Router,
    private produtoService : ProdutoService,
    private categoriaService : CategoriaService,
    private alert : AlertService
    
    

  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.getAllProdutos()
    this.getAllCategorias()
     
  } 

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

  getAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    } )
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp : Categoria) => {
      this.categoria = resp
    })
  }  

  cadastrarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.user.id = this.idUsuario
    this.produto.usuario = this.user    

    this.produtoService.postProduto(this.produto).subscribe((resp : Produto) =>{
      this.produto = resp
      this.alert.showAlertSuccess("Produto Cadastrado!!")       
      this.reloadCurrentRoute()
    })    
  }
 

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }  


}
