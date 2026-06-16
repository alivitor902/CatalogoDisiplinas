import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private quantidadeRequisicoes = 0;
  private carregandoSubject = new BehaviorSubject<boolean>(false);

  carregando$ = this.carregandoSubject.asObservable();

  iniciar(): void {
    this.quantidadeRequisicoes++;
    this.carregandoSubject.next(true);
  }

  finalizar(): void {
    this.quantidadeRequisicoes = Math.max(this.quantidadeRequisicoes - 1, 0);

    if (this.quantidadeRequisicoes === 0) {
      this.carregandoSubject.next(false);
    }
  }
}
