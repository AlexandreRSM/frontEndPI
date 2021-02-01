import { AuthService } from './../service/auth.service';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../Model/Produto';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../Model/Usuario';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  listaProdutos: Produto[]
  user: Usuario = new Usuario()
  idUsuario = environment.id 


  constructor(
    private produtoService: ProdutoService,
    private authService: AuthService
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

  findByIdUsuario(){ /*get by produtor NAO FUNCIONA NO CARDAPIO*/
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp : Usuario) =>{
      this.user = resp
    })
  }
}
