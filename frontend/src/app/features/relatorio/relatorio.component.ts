import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';  // Import correto para ng2-charts
import { ChartConfiguration, ChartOptions } from 'chart.js';

import { RelatorioService } from './relatorio.service';
import { RelatorioOperacional } from './relatorio.model';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    NgChartsModule,
  ],
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
  providers: [DatePipe]
})
export class RelatorioComponent implements OnInit {
  relatorio?: RelatorioOperacional;
  displayedColumns = ['id', 'cliente', 'dispositivo', 'status', 'dataAtualizacao'];

  public pieChartLabels: string[] = [];
  public pieChartDatasets: ChartConfiguration<'pie'>['data']['datasets'] = [
    { data: [], label: 'Ordens por status' }
  ];
  public pieChartType: 'pie' = 'pie';  // Tipo literal para evitar erro
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: { legend: { position: 'right' } }
  };

  // Line chart (ordens por dia)
  public lineChartLabels: string[] = [];
  public lineChartDatasets: ChartConfiguration<'line'>['data']['datasets'] = [
    { data: [], label: 'Ordens por dia', fill: true, tension: 0.4 }
  ];
  public lineChartType: 'line' = 'line';  // Tipo literal para evitar erro
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: 'Data' } },
      y: { title: { display: true, text: 'Quantidade' }, beginAtZero: true }
    }
  };

  constructor(
    private srv: RelatorioService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.srv.getRelatorioMockado().subscribe(r => {
      this.relatorio = r;

      // popula pie chart
      this.pieChartLabels = Object.keys(r.distribuicaoPorStatus);
      this.pieChartDatasets[0].data = Object.values(r.distribuicaoPorStatus);

      // popula line chart
      this.lineChartLabels = Object.keys(r.ordensPorDia)
        .map(d => this.datePipe.transform(d, 'dd/MM')!);
      this.lineChartDatasets[0].data = Object.values(r.ordensPorDia);
    });
  }

  formatarData(dt: string): string {
    return this.datePipe.transform(dt, 'dd/MM/yyyy HH:mm') || '';
  }
}
