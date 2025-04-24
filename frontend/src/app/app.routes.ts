import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientePageComponent } from './pages/clientes/cliente-page/cliente-page.component';
import { DispositivoPageComponent } from './pages/dispositivos/dispositivo-page/dispositivo-page.component';
import { OrdemPageComponent } from './pages/ordens/ordem-page/ordem-page.component';
import { EstoquePageComponent } from './pages/estoque/estoque-page/estoque-page.component';
import { RelatorioPageComponent } from './pages/relatorios/relatorio-page/relatorio-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClientePageComponent },
  { path: 'dispositivos', component: DispositivoPageComponent },
  { path: 'ordens', component: OrdemPageComponent },
  { path: 'estoque', component: EstoquePageComponent },
  { path: 'relatorios', component: RelatorioPageComponent },
  { path: '**', redirectTo: '' }
];
