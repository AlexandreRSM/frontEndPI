import { AlertService } from './../../service/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from './../../service/categoria.service';
import { Categoria } from './../../Model/Categoria';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria :number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert : AlertService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar']) /* ARRUMAR ESSE LINK*/
    }

    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp :Categoria) =>{
      this.categoria = resp
    })
  }

  apagar(){
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(() =>{
      this.alert.showAlertSuccess("Tema apagado com sucesso!!")
      this.router.navigate(['/cadastro-categoria'])
    })
  }



}
