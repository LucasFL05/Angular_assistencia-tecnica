import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DispositivoDialogComponent } from './dispositivo-dialog.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dispositivo',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
  ],
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent {
  displayedColumns: string[] = ['id', 'tipo', 'marca', 'modelo', 'cliente', 'acoes'];
  dataSource: any[] = [
    {
      id: 3,
      tipo: 'Notebook',
      marca: 'Dell',
      modelo: 'Inspiron 15 3000',
      cliente: { id: 5, nome: 'Lucas Ferreira', email: 'lucas@email3.com' }
    },
    {
      id: 2,
      tipo: 'Notebook Gamer',
      marca: 'Dell',
      modelo: 'G15 5520',
      cliente: { id: 5, nome: 'Lucas Ferreira', email: 'lucas@email3.com' }
    }
  ];

  constructor(private dialog: MatDialog) {}

  addDispositivo(): void {
    const dialogRef = this.dialog.open(DispositivoDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const novoId = Math.max(...this.dataSource.map(d => d.id)) + 1;
        this.dataSource.push({ id: novoId, ...result });
        this.dataSource = [...this.dataSource];
      }
    });
  }

  editDispositivo(dispositivo: any): void {
    const dialogRef = this.dialog.open(DispositivoDialogComponent, {
      data: dispositivo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex(d => d.id === dispositivo.id);
        this.dataSource[index] = { ...this.dataSource[index], ...result };
        this.dataSource = [...this.dataSource];
      }
    });
  }

  deleteDispositivo(id: number): void {
    this.dataSource = this.dataSource.filter(d => d.id !== id);
  }
}
