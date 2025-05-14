import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dispositivo-dialog',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>{{ data ? 'Editar' : 'Novo' }} Dispositivo</h2>
    <form #form="ngForm" (ngSubmit)="submit()">
      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Tipo"
          [(ngModel)]="formData.tipo"
          name="tipo"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Marca"
          [(ngModel)]="formData.marca"
          name="marca"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Modelo"
          [(ngModel)]="formData.modelo"
          name="modelo"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Nome do Cliente"
          [(ngModel)]="formData.cliente.nome"
          name="clienteNome"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Email do Cliente"
          [(ngModel)]="formData.cliente.email"
          name="clienteEmail"
          required
        />
      </mat-form-field>

      <div style="text-align: right;">
        <button mat-button type="button" (click)="dialogRef.close()">
          Cancelar
        </button>
        <button mat-raised-button color="primary" type="submit">Salvar</button>
      </div>
    </form>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class DispositivoDialogComponent {
  formData: any = {
    tipo: '',
    marca: '',
    modelo: '',
    cliente: { nome: '', email: '' },
  };

  constructor(
    public dialogRef: MatDialogRef<DispositivoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.formData = JSON.parse(JSON.stringify(data));
    }
  }

  submit(): void {
    this.dialogRef.close(this.formData);
  }
}
