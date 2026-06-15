import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Disciplina } from '../../models/disciplina.model';
import { GradeInteresseService } from '../../services/grade-interesse.service';

@Component({
  selector: 'app-interesses',
  imports: [CommonModule, RouterLink],
  templateUrl: './interesses.html',
  styleUrls: ['./interesses.css'],
})
export class Interesses {
  disciplinasSelecionadas: Disciplina[] = [];

  constructor(private gradeInteresseService: GradeInteresseService) {
    this.carregarDisciplinas();
  }

  carregarDisciplinas(): void {
    this.disciplinasSelecionadas = this.gradeInteresseService.listarDisciplinas();
  }

  removerDisciplina(id: number): void {
    this.gradeInteresseService.removerDisciplina(id);
    this.carregarDisciplinas();
  }
}
