import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EstoqueDialogComponent } from './estoque-dialog.component';

@Component({
  selector: 'app-estoque',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css',
})
export class EstoqueComponent {
  displayedColumns: string[] = ['id', 'nome', 'codigo', 'categoria', 'quantidade', 'status', 'acoes'];

  dataSource = [
    {
      id: 1,
      nome: 'Placa-mãe Asus H310M',
      codigo: 'PM-AS-H310M',
      categoria: 'Hardware',
      quantidade: 4,
      status: 'Disponível'
    },
    {
      id: 2,
      nome: 'Fonte ATX 500W',
      codigo: 'FNT-ATX-500',
      categoria: 'Hardware',
      quantidade: 0,
      status: 'Em Falta'
    },
    {
      id: 3,
      nome: 'Cabo HDMI 2m',
      codigo: 'CB-HDMI-2M',
      categoria: 'Cabos',
      quantidade: 15,
      status: 'Disponível'
    }
  ];

  constructor(private dialog: MatDialog) {}

  addItem(): void {
    const dialogRef = this.dialog.open(EstoqueDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const novoId = Math.max(...this.dataSource.map(i => i.id)) + 1;
        this.dataSource.push({ id: novoId, ...result });
        this.dataSource = [...this.dataSource];
      }
    });
  }

  editItem(item: any): void {
    const dialogRef = this.dialog.open(EstoqueDialogComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex(i => i.id === item.id);
        this.dataSource[index] = { ...this.dataSource[index], ...result };
        this.dataSource = [...this.dataSource];
      }
    });
  }

  deleteItem(id: number): void {
    this.dataSource = this.dataSource.filter(i => i.id !== id);
  }
}
