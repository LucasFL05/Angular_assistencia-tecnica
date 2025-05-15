import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ordem-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>{{ data ? 'Editar' : 'Nova' }} Ordem de Serviço</h2>
    <form #form="ngForm" (ngSubmit)="submit()">
      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Descrição do Problema"
          [(ngModel)]="formData.descricaoProblema"
          name="descricaoProblema"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="Status"
          [(ngModel)]="formData.status"
          name="status"
          required
          list="statusOptions"
        />
        <datalist id="statusOptions">
          <option value="ABERTA"></option>
          <option value="EM_ANDAMENTO"></option>
          <option value="CONCLUIDA"></option>
          <option value="CANCELADA"></option>
        </datalist>
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          type="date"
          placeholder="Data de Abertura"
          [(ngModel)]="formData.dataAbertura"
          name="dataAbertura"
          required
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          type="date"
          placeholder="Data de Conclusão"
          [(ngModel)]="formData.dataConclusao"
          name="dataConclusao"
        />
      </mat-form-field>

      <mat-form-field class="full-width">
        <input
          matInput
          type="number"
          placeholder="ID do Dispositivo"
          [(ngModel)]="formData.dispositivoId"
          name="dispositivoId"
          required
          min="1"
        />
      </mat-form-field>

      <div style="text-align: right;">
        <button mat-button type="button" (click)="dialogRef.close()">Cancelar</button>
        <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Salvar</button>
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
export class OrdemDialogComponent {
  formData: any = {
    descricaoProblema: '',
    status: 'ABERTA',
    dataAbertura: '',
    dataConclusao: '',
    dispositivoId: null,
  };

  constructor(
    public dialogRef: MatDialogRef<OrdemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.formData = {
        ...data,
        // Garantir que datas sejam strings no formato yyyy-MM-dd para o input date
        dataAbertura: data.dataAbertura ? this.formatDate(data.dataAbertura) : '',
        dataConclusao: data.dataConclusao ? this.formatDate(data.dataConclusao) : '',
      };
    }
  }

  formatDate(date: Date | string): string {
    const d = new Date(date);
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }

  submit(): void {
    // Convertendo strings para Date, caso datas não vazias
    const processedData = {
      ...this.formData,
      dataAbertura: this.formData.dataAbertura ? new Date(this.formData.dataAbertura) : null,
      dataConclusao: this.formData.dataConclusao ? new Date(this.formData.dataConclusao) : null,
    };
    this.dialogRef.close(processedData);
  }
}
