import { Routes } from '@angular/router';
import { CampanhaLista } from '../pages/campanha-lista/campanha-lista';
import { CampanhaDetalhe } from '../pages/campanha-detalhe/campanha-detalhe';
import { CampanhaForm } from '../pages/campanha-form/campanha-form';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'campanhas',
    pathMatch: 'full',
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
];
