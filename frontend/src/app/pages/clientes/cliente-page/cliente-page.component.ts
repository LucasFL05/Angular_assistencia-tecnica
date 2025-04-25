import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-cliente-page',
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule],
  templateUrl: './cliente-page.component.html',
  styleUrl: './cliente-page.component.css',
})
export class ClientePageComponent {
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone'];
  clientes = [
    {
      id: 1,
      nome: 'Lucas Ferreira',
      email: 'lucas@email.com',
      telefone: '(11) 99999-9999',
    },
    {
      id: 2,
      nome: 'João Silva',
      email: 'joao@email.com',
      telefone: '(11) 98888-8888',
    },
    {
      id: 3,
      nome: 'Maria Souza',
      email: 'maria@email.com',
      telefone: '(11) 97777-7777',
    },
  ];
}
