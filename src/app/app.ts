import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { LoadingService } from './services/loading.service';
import { MensagemService, MensagemSistema } from './services/mensagem.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  carregando$: Observable<boolean>;
  mensagem$: Observable<MensagemSistema | null>;

  constructor(
    public authService: AuthService,
    private loadingService: LoadingService,
    private mensagemService: MensagemService,
    private router: Router
  ) {
    this.carregando$ = this.loadingService.carregando$;
    this.mensagem$ = this.mensagemService.mensagem$;
  }

  sair(): void {
    this.authService.logout();
    this.mensagemService.mostrarSucesso('Logout realizado com sucesso.');
    this.router.navigate(['/login']);
  }
}
