import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClienteDialogComponent } from './cliente-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-cliente',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', "acoes"];
  dataSource = [
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

  constructor(private dialog: MatDialog) {}

  addCliente(): void {
    const dialogRef = this.dialog.open(ClienteDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const novoId = Math.max(...this.dataSource.map(c => c.id)) + 1;
        this.dataSource.push({ id: novoId, ...result });
        this.dataSource = [...this.dataSource];
      }
    });
  }

  editCliente(cliente: any): void {
    const dialogRef = this.dialog.open(ClienteDialogComponent, {
      data: cliente
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex(c => c.id === cliente.id);
        this.dataSource[index] = { ...this.dataSource[index], ...result };
        this.dataSource = [...this.dataSource];
      }
    });
  }

  deleteCliente(id: number): void {
    this.dataSource = this.dataSource.filter(c => c.id !== id);
  }
}
