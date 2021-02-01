import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {
  nome = environment.nome
  id = environment.id

  constructor(
    private router : Router
  ) { }

  ngOnInit(){
  }


  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''   
  }

}
