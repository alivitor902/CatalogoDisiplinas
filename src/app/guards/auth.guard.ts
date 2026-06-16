import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MensagemService } from '../services/mensagem.service';

export const authGuard: CanActivateFn = (_route, state) => {
  const authService = inject(AuthService);

  if (authService.estaAutenticado()) {
    return true;
  }

  const mensagemService = inject(MensagemService);
  const router = inject(Router);

  mensagemService.mostrarErro('Faça login para acessar a área administrativa.');

  return router.createUrlTree(['/login'], {
    queryParams: {
      returnUrl: state.url,
    },
  });
};

export const authChildGuard: CanActivateChildFn = (route, state) => authGuard(route, state);
