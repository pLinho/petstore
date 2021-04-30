import { Component, OnInit, HostListener } from '@angular/core';
import { Client } from 'src/app/models/client';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ns-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  lista: Client[] = [] ;
  selecionado?: Client;
  selecionados: Client[] = [];

  form: FormGroup = this.fb.group({

      tipoPessoa:  ['',[]],
      cpfCnpj:  ['',[]],
      nomeCompleto: [  '', []],
      nomeUsal: [ '',, []],
      dataCriacao: [ '', []],
      inscricaoEstadual: [ '', []],
      inscricaMunicipal: [  '', []],
      email: [  '', []],
      grupo: [  '', []],

  })

  resetForm(client?: Client) {
    if (client) {
      this.form.reset({
      tipoPessoa: client.tipoPessoa ,
      cpfCnpj: client.cpfCnpj  ,
      nomeCompleto: client.nomeCompleto ,
      nomeUsal: client.nomeUsal,
      dataCriacao: client.dataCriacao,
      inscricaoEstadual: client.inscricaoEstadual,
      inscricaMunicipal: client.inscricaMunicipal,
      email: client.email,
      grupo: client.grupo,
      })
    }

    else {
      this.form.reset();
    }
  }
  
  
  constructor(private fb : FormBuilder) {
   }

  ngOnInit() {
    this.form.valueChanges.subscribe(value => this.onChange(value))
  }
  onChange(valor: any) {
    if (this.selecionado) {
      Object.assign(this.selecionado, valor)
    }
  }

  save() {
    if (this.form.invalid) return;
    Object.assign(this.selecionado, this.form.getRawValue())
  }

  selecionar(client: Client, event: MouseEvent) {
    if (client === this.selecionado) {
      this.selecionado =undefined;
      this.resetForm();

    } else {
      this.selecionado = client;
      this.resetForm(client);
    }
      

    /*if (event.ctrlKey) {
      this.selecionados.push(client);
    } else {
      this.selecionados = []
    }*/

  }

  adicionarClient() {
    const client : Client = {
      tipoPessoa: 'F',
      cpfCnpj: '',
      nomeCompleto: 'vazio',
      nomeUsal:'',
      dataCriacao: new Date(),
      inscricaoEstadual:'',
      inscricaMunicipal: '',
      email: '',
      grupo: '',
    };
    this.lista.push(client);
  }

  @HostListener('window.keypress', ['$event'])
  navegar (event: KeyboardEvent) {
    if (event.code) {

    }
  }

}
