import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-estoque-dialog',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>{{ data ? 'Editar' : 'Novo' }} Produto</h2>
    <form #form="ngForm" (ngSubmit)="submit()">
      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Nome do Produto"
          [(ngModel)]="formData.nome"
          name="nome"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          type="number"
          placeholder="Quantidade"
          [(ngModel)]="formData.quantidade"
          name="quantidade"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          type="number"
          placeholder="Valor Unitário"
          [(ngModel)]="formData.valorUnitario"
          name="valorUnitario"
          required
        />
      </mat-form-field>

      <div style="text-align: right;">
        <button mat-button type="button" (click)="dialogRef.close()">
          Cancelar
        </button>
        <button mat-raised-button color="primary" type="submit">
          Salvar
        </button>
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
export class EstoqueDialogComponent {
  formData: any = {
    nome: '',
    quantidade: 0,
    valorUnitario: 0.0,
  };

  constructor(
    public dialogRef: MatDialogRef<EstoqueDialogComponent>,
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
