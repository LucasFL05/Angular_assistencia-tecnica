import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrdemDialogComponent } from './ordem-dialog.component';

@Component({
  selector: 'app-ordem',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
  ],
  templateUrl: './ordem.component.html',
  styleUrls: ['./ordem.component.css']
})
export class OrdemComponent {
  displayedColumns: string[] = [
    'id',
    'descricaoProblema',
    'status',
    'dataAbertura',
    'dataConclusao',
    'dispositivoId',
    'acoes'
  ];

  dataSource = [
    {
      id: 1,
      descricaoProblema: 'Tela quebrada',
      status: 'ABERTA',
      dataAbertura: new Date('2025-05-01T10:00:00'),
      dataConclusao: null,
      dispositivoId: 101
    },
    {
      id: 2,
      descricaoProblema: 'Não liga',
      status: 'EM_ANDAMENTO',
      dataAbertura: new Date('2025-05-05T14:30:00'),
      dataConclusao: null,
      dispositivoId: 102
    },
    {
      id: 3,
      descricaoProblema: 'Bateria não carrega',
      status: 'CONCLUIDA',
      dataAbertura: new Date('2025-04-20T09:15:00'),
      dataConclusao: new Date('2025-04-25T11:45:00'),
      dispositivoId: 103
    },
  ];

  constructor(private dialog: MatDialog) {}

  addOrdem(): void {
    const dialogRef = this.dialog.open(OrdemDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const novoId = Math.max(...this.dataSource.map(o => o.id)) + 1;
        this.dataSource.push({ id: novoId, ...result });
        this.dataSource = [...this.dataSource];
      }
    });
  }

  editOrdem(ordem: any): void {
    const dialogRef = this.dialog.open(OrdemDialogComponent, {
      data: ordem
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex(o => o.id === ordem.id);
        this.dataSource[index] = { ...this.dataSource[index], ...result };
        this.dataSource = [...this.dataSource];
      }
    });
  }

  deleteOrdem(id: number): void {
    this.dataSource = this.dataSource.filter(o => o.id !== id);
  }
}
