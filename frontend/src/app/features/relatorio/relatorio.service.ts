import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RelatorioOperacional } from './relatorio.model';

@Injectable({ providedIn: 'root' })
export class RelatorioService {
  getRelatorioMockado(): Observable<RelatorioOperacional> {
    const data: RelatorioOperacional = {
      totalConcluidasMes: 22,
      totalEmAndamento: 6,
      totalCanceladasMes: 3,
      totalAbertasHoje: 5,
      ordensRecentes: [
        { id: 101, cliente: 'João Silva', dispositivo: 'Samsung A10', status: 'CONCLUIDA', dataAtualizacao: '2025-05-13T14:20:00', tecnico: 'Marcos' },
        { id: 102, cliente: 'Maria Oliveira', dispositivo: 'iPhone 12',   status: 'EM_ANDAMENTO', dataAtualizacao: '2025-05-13T13:10:00', tecnico: 'Ana' },
        { id: 103, cliente: 'Carlos Souza',  dispositivo: 'Moto G9',      status: 'AGUARDANDO_PECAS', dataAtualizacao: '2025-05-12T11:45:00', tecnico: 'Lucas' }
      ],
      distribuicaoPorStatus: {
        CONCLUIDA: 22,
        EM_ANDAMENTO: 6,
        AGUARDANDO_PECAS: 2,
        CANCELADA: 3
      },
      ordensPorDia: {
        '2025-05-10': 5,
        '2025-05-11': 2,
        '2025-05-12': 4,
        '2025-05-13': 6
      }
    };
    return of(data);
  }
}
