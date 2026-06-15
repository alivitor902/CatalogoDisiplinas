import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Campanha } from '../../models/campanha.model';
import { CampanhaService } from '../../services/campanha.service';

@Component({
  selector: 'app-campanha-lista',
  imports: [RouterLink],
  templateUrl: './campanha-lista.html',
  styleUrl: './campanha-lista.css',
})
export class CampanhaLista {
  campanhas: Campanha[] = [];
  mensagem = '';

  constructor(private campanhaService: CampanhaService) {
    this.carregarCampanhas();
  }

  carregarCampanhas(): void {
    this.campanhas = this.campanhaService.listarCampanhas();
  }

  excluirCampanha(campanha: Campanha): void {
    const confirmouExclusao = confirm(`Deseja realmente excluir a campanha "${campanha.titulo}"?`);

    if (!confirmouExclusao) {
      return;
    }

    this.campanhaService.excluirCampanha(campanha.id);
    this.mensagem = `Campanha "${campanha.titulo}" excluída com sucesso.`;
    this.carregarCampanhas();
  }
}
