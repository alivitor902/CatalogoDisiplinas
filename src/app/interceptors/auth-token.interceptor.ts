import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoadingService } from '../services/loading.service';

export const authTokenInterceptor: HttpInterceptorFn = (request, next) => {
  const authService = inject(AuthService);
  const loadingService = inject(LoadingService);
  const token = authService.obterToken();

  loadingService.iniciar();

  const headers: Record<string, string> = {
    'X-Sistema': 'Catalogo-Disciplinas-Academicas',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const requisicaoComHeaders = request.clone({
    setHeaders: headers,
  });

  return next(requisicaoComHeaders).pipe(
    finalize(() => {
      loadingService.finalizar();
    })
  );
};
