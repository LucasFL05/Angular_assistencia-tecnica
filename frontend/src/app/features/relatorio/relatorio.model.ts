export interface RelatorioOperacional {
  totalConcluidasMes: number;
  totalEmAndamento: number;
  totalCanceladasMes: number;
  totalAbertasHoje: number;
  ordensRecentes: OrdemResumo[];
  distribuicaoPorStatus: { [status: string]: number };
  ordensPorDia: { [data: string]: number };
}

export interface OrdemResumo {
  id: number;
  cliente: string;
  dispositivo: string;
  status: string;
  dataAtualizacao: string;
}
