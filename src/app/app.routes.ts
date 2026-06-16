import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Disciplinas } from './pages/disciplinas/disciplinas';
import { Interesses } from './pages/interesses/interesses';
import { Sobre } from './pages/sobre/sobre';
import { CampanhaForm } from './pages/campanha-form/campanha-form';
import { CampanhaLista } from './pages/campanha-lista/campanha-lista';
import { CampanhaDetalhe } from './pages/campanha-detalhe/campanha-detalhe';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'itens',
    component: Disciplinas,
  },
  {
    path: 'favoritos',
    component: Interesses,
  },
  {
    path: 'sobre',
    component: Sobre,
  },
  {
    path: 'campanhas',
    component: CampanhaLista,
  },
  {
    path: 'campanhas/:id',
    component: CampanhaDetalhe,
  },
  {
    path: 'campanha-form',
    component: CampanhaForm,
  },
  {
    path: 'campanha-form/:id',
    component: CampanhaForm,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
