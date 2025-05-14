import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DispositivoComponent } from './features/dispositivo/dispositivo.component';
import { OrdemComponent } from './features/ordem/ordem.component';
import { EstoqueComponent } from './features/estoque/estoque.component';
import { RelatorioComponent } from './features/relatorio/relatorio.component';
import { ClienteComponent } from './features/cliente/cliente.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'dispositivos', component: DispositivoComponent },
  { path: 'ordens', component: OrdemComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'relatorios', component: RelatorioComponent },
  { path: '**', redirectTo: '' }
];

