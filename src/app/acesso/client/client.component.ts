import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/cliente';

@Component({
  selector: 'ns-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  lista: Cliente[] = [];
  selecionado?: Cliente
  form: FormGroup = this.fb.group({
    tipoPessoa: ['', []],
    cpfCnpj: ['', []],
    nomeCompleto: ['', []],
    nomeUsual: ['', []],
    dataCriacao: ['', []],
    contribuicao: ['', []],
    inscricaoEstadual: ['', []],
    inscricaoMunicipal: ['', []],
    email: ['', []],
    grupo: ['', []],
  });

  resetForm(cliente?: Cliente) {
    if (cliente){
      this.form.reset({
        tipoPessoa: cliente.tipoPessoa,
        cpfCnpj: cliente.cpfCnpj,
        nomeCompleto: cliente.nomeCompleto,
        nomeUsual: cliente.nomeUsual,
        dataCriacao: cliente.dataCriacao,
        contribuicao: cliente.contribuicao,
        inscricaoEstadual: cliente.inscricaoEstadual,
        inscricaoMunicipal: cliente.inscricaoMunicipal,
        email: cliente.email,
        grupo: cliente.grupo,
      })
    }
  }
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => this.onChange(value))
  }

  onChange(valor : any){
    if (this.selecionado) {
      Object.assign(this.selecionado, valor)
    }
  }

  selecionar(cliente: Cliente){
    this.selecionado = cliente;
    this.resetForm(cliente);
  }

  adicionarCliente(){
    const cliente : Cliente = {
      tipoPessoa: 'F',
      cpfCnpj: '',
      nomeCompleto: 'Novo Cliente',
      nomeUsual: '',
      dataCriacao: new Date(),
      inscricaoEstadual: '',
      inscricaoMunicipal: '',
      email: '',
      grupo: '',
    };
    this.lista.push(cliente);
  }

}
