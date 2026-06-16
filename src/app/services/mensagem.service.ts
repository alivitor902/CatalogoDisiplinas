import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type TipoMensagem = 'sucesso' | 'erro';

export interface MensagemSistema {
  tipo: TipoMensagem;
  texto: string;
}

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  private mensagemSubject = new BehaviorSubject<MensagemSistema | null>(null);

  mensagem$ = this.mensagemSubject.asObservable();

  mostrarSucesso(texto: string): void {
    this.mostrarMensagem({ tipo: 'sucesso', texto });
  }

  mostrarErro(texto: string): void {
    this.mostrarMensagem({ tipo: 'erro', texto });
  }

  limpar(): void {
    this.mensagemSubject.next(null);
  }

  private mostrarMensagem(mensagem: MensagemSistema): void {
    this.mensagemSubject.next(mensagem);

    setTimeout(() => {
      if (this.mensagemSubject.value === mensagem) {
        this.limpar();
      }
    }, 3500);
  }
}
