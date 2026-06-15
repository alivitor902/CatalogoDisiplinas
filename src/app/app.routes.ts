import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Disciplinas } from './pages/disciplinas/disciplinas';
import { Interesses } from './pages/interesses/interesses';
import { Sobre } from './pages/sobre/sobre';

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
    path: '**',
    redirectTo: 'home',
  },
];
