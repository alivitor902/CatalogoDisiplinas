import { Injectable } from '@angular/core';
import { Disciplina } from '../models/disciplina.model';

@Injectable({
  providedIn: 'root',
})
export class GradeInteresseService {
  private disciplinasSelecionadas: Disciplina[] = [];

  adicionarDisciplina(disciplina: Disciplina): void {
    const disciplinaJaExiste = this.disciplinasSelecionadas.some(
      (item) => item.id === disciplina.id
    );

    if (!disciplinaJaExiste) {
      this.disciplinasSelecionadas.push(disciplina);
    }
  }

  removerDisciplina(id: number): void {
    this.disciplinasSelecionadas = this.disciplinasSelecionadas.filter(
      (disciplina) => disciplina.id !== id
    );
  }

  listarDisciplinas(): Disciplina[] {
    return this.disciplinasSelecionadas;
  }

  verificarSelecionada(id: number): boolean {
    return this.disciplinasSelecionadas.some(
      (disciplina) => disciplina.id === id
    );
  }
}
