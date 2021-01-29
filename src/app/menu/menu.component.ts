import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

}
