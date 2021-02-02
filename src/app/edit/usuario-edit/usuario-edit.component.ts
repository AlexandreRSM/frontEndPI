import { AlertService } from './../../service/alert.service';
import { environment } from './../../../environments/environment.prod';
import { AuthService } from './../../service/auth.service';
import { Usuario } from './../../Model/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {
  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmarSenha : string
  tipoUsuario: string



  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alert : AlertService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') /* ARRUMAR CASO SEJA PRODUTOR OU USUARIO*/ {
      this.router.navigate(['/entrar']) /* ARRUMAR ESSE LINK */
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  atualizar() {
    this.usuario.tipo = this.tipoUsuario

    if (this.usuario.senha != this.confirmarSenha) {
      this.alert.showAlertDanger("A senha esta incorreta.")
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        this.alert.showAlertSuccess("Usuário atualizado com sucesso, faça o login novamente!")
        environment.token = ''
        environment.nome = ''
        environment.id = 0
        this.router.navigate(['/entrar'])
      })
    

    }
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
