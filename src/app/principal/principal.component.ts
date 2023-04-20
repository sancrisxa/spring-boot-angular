import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  // Objeto do tipo Cliente
  cliente = new Cliente();

  // Variavel para visibilidade dos botoes
  btnCadastro: boolean = true;

  // JSON de clientes
  clientes:Cliente[] = [];

  // Construtor
  constructor(private servico:ClienteService) {

  }

  // Metodo de selecao
  selecionar(): void {
    this.servico.selecionar().subscribe(retorno => this.clientes =retorno);
  }

  // Metodo de incializacao
  ngOnInit() {
    this.selecionar();
  }

}
