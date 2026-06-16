import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map, catchError, throwError } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

export interface DadosLogin {
  email: string;
  senha: string;
}

export interface UsuarioApi {
  id: number;
  nome: string;
  email: string;
  senha: string;
  perfil: string;
  token: string;
}

export interface UsuarioAutenticado {
  id: number;
  nome: string;
  email: string;
  perfil: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly urlUsuarios = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.usuarios}`;

  constructor(private httpClient: HttpClient) {}

  login(dadosLogin: DadosLogin): Observable<UsuarioAutenticado> {
    const email = encodeURIComponent(dadosLogin.email);
    const senha = encodeURIComponent(dadosLogin.senha);
    const urlLogin = `${this.urlUsuarios}?email=${email}&senha=${senha}`;

    return this.httpClient.get<UsuarioApi[]>(urlLogin).pipe(
      delay(500),
      map((usuarios) => {
        const usuarioEncontrado = usuarios[0];

        if (!usuarioEncontrado) {
          throw new Error('E-mail ou senha inválidos.');
        }

        const usuarioAutenticado: UsuarioAutenticado = {
          id: usuarioEncontrado.id,
          nome: usuarioEncontrado.nome,
          email: usuarioEncontrado.email,
          perfil: usuarioEncontrado.perfil,
          token: usuarioEncontrado.token,
        };

        this.salvarSessao(usuarioAutenticado);

        return usuarioAutenticado;
      }),
      catchError((erro) => {
        const mensagem = erro instanceof Error ? erro.message : 'Não foi possível realizar o login.';
        return throwError(() => new Error(mensagem));
      })
    );
  }

  logout(): void {
    localStorage.removeItem(API_CONFIG.storage.tokenKey);
    localStorage.removeItem(API_CONFIG.storage.usuarioKey);
  }

  estaAutenticado(): boolean {
    return !!this.obterToken();
  }

  obterToken(): string | null {
    return localStorage.getItem(API_CONFIG.storage.tokenKey);
  }

  obterUsuario(): UsuarioAutenticado | null {
    const usuarioSalvo = localStorage.getItem(API_CONFIG.storage.usuarioKey);

    if (!usuarioSalvo) {
      return null;
    }

    try {
      return JSON.parse(usuarioSalvo) as UsuarioAutenticado;
    } catch {
      this.logout();
      return null;
    }
  }

  private salvarSessao(usuario: UsuarioAutenticado): void {
    localStorage.setItem(API_CONFIG.storage.tokenKey, usuario.token);
    localStorage.setItem(API_CONFIG.storage.usuarioKey, JSON.stringify(usuario));
  }
}
