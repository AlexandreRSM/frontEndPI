import { CategoriaService } from './../../service/categoria.service';
import { ProdutoService } from './../../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/Produto';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') /* ARRUMAR CASO SEJA PRODUTOR OU USUARIO*/ {
      this.router.navigate(['/entrar']) /* ARRUMAR ESSE LINK */
    }
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)

  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  apagar() {
    this.produtoService.deleteProduto(this.idProduto).subscribe(() =>{
      alert('Produto apagado com sucesso')
      this.router.navigate(['/cadastro-produtos'])
    })
  }
}
