import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cliente-dialog',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>{{ data ? 'Editar' : 'Novo' }} Cliente</h2>
    <form #form="ngForm" (ngSubmit)="submit()">
      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Nome"
          [(ngModel)]="formData.nome"
          name="nome"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Email"
          [(ngModel)]="formData.email"
          name="email"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Telefone"
          [(ngModel)]="formData.telefone"
          name="telefone"
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
export class ClienteDialogComponent {
  formData: any = {
    nome: '',
    email: '',
    telefone: '',
  };

  constructor(
    public dialogRef: MatDialogRef<ClienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.formData = { ...data };
    }
  }

  submit(): void {
    this.dialogRef.close(this.formData);
  }
}
