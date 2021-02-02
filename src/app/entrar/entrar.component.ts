import { AlertService } from './../service/alert.service';
import { AuthService } from './../service/auth.service';
import { UserLogin } from './../Model/UserLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})

export class EntrarComponent implements OnInit {
  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alert : AlertService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
      environment.tipo = this.userLogin.tipo
      environment.email = this.userLogin.email
      
      if (environment.tipo ==  'Produtor'){      
      this.router.navigate(['/cadastro-produtos'])
      } else {
        this.router.navigate(['/cardapio'])
      }

    }, erro => {
      if (erro.status == 500) {
        this.alert.showAlertDanger("Usuários ou senha estão incorretos")
      }
    })
  }

}


