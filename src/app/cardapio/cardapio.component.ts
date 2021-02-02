import { CategoriaService } from './../service/categoria.service';
import { AuthService } from './../service/auth.service';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../Model/Produto';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../Model/Usuario';
import { Categoria } from '../Model/Categoria';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  listaProdutos: Produto[]
  user: Usuario = new Usuario()
  listaCategoria : Categoria[]
  categoria : string
  idUsuario = environment.id
  produtoPost: string
  key = 'data'
  reverse = true  



  constructor(
    private produtoService: ProdutoService,
    private authService: AuthService,
    private categoriaService : CategoriaService
  ) { }

  ngOnInit() {

    this.getAllProdutos()
  }

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log(resp)
    })
  }

  findByIdUsuario() { /*get by produtor NAO FUNCIONA NO CARDAPIO*/
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  findByNomeProduto() {
    if (this.produtoPost == '') {
      this.getAllProdutos()
    }
    else {
      this.produtoService.getByNomeProduto(this.produtoPost).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp
      })
    }
  }

  findByCategoria() {
    this.categoriaService.getByNomeCategoria(this.categoria).subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }
}
