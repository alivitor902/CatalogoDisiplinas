import { HttpInterceptorFn } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

export const authTokenInterceptor: HttpInterceptorFn = (request, next) => {
  const requisicaoComToken = request.clone({
    setHeaders: {
      Authorization: `Bearer ${API_CONFIG.authToken}`,
      'X-Sistema': 'Catalogo-Disciplinas-Academicas',
    },
  });

  return next(requisicaoComToken);
};
