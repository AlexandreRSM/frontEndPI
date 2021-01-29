import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "sobre-nos", component: SobreNosComponent },
  { path: "contato", component: ContatoComponent },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "entrar", component: EntrarComponent },
  { path: "cardapio", component: CardapioComponent },
  { path: "cadastro-categoria", component: CadastroCategoriaComponent },
  { path: "categoria-edit/:id", component: CategoriaEditComponent },
  { path: "categoria-delete/:id", component: CategoriaDeleteComponent },
  { path: "cadastro-produtos", component: CadastroProdutosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
