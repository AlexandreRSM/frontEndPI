import { Usuario } from './Usuario';
import { Categoria } from './Categoria';

export class Produto{
  public id: number
  public nome: string
  public descricao: string
  public preco: number
  public disponibilidade: boolean
  public qtd: number
  public usuario : Usuario
  public regiao: string
  public categoria: Categoria


  /*ADICIONAR FOTO!*/

}
