import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Disciplinas } from './pages/disciplinas/disciplinas';
import { Interesses } from './pages/interesses/interesses';
import { Sobre } from './pages/sobre/sobre';
import { Login } from './pages/login/login';
import { authChildGuard, authGuard } from './guards/auth.guard';

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
    path: 'login',
    component: Login,
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
    loadChildren: () => import('./admin/admin.routes').then((arquivo) => arquivo.ADMIN_ROUTES),
  },
  {
    path: 'campanhas',
    redirectTo: 'admin/campanhas',
    pathMatch: 'full',
  },
  {
    path: 'campanhas/:id',
    redirectTo: 'admin/campanhas/:id',
  },
  {
    path: 'campanha-form',
    redirectTo: 'admin/campanha-form',
    pathMatch: 'full',
  },
  {
    path: 'campanha-form/:id',
    redirectTo: 'admin/campanha-form/:id',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
