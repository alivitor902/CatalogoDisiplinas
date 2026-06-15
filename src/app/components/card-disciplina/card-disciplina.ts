import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Disciplina } from '../../models/disciplina.model';

@Component({
  selector: 'app-card-disciplina',
  imports: [],
  templateUrl: './card-disciplina.html',
  styleUrls: ['./card-disciplina.css'],
})
export class CardDisciplina {
  @Input() disciplina!: Disciplina;
  @Input() selecionada = false;

  @Output() adicionar = new EventEmitter<Disciplina>();
  @Output() remover = new EventEmitter<number>();

  adicionarNaGrade(): void {
    this.adicionar.emit(this.disciplina);
  }

  removerDaGrade(): void {
    this.remover.emit(this.disciplina.id);
  }
}
