import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Campanha } from '../../models/campanha.model';
import { CampanhasApiService } from '../../services/campanhas-api.service';

@Component({
  selector: 'app-campanha-lista',
  imports: [RouterLink],
  templateUrl: './campanha-lista.html',
  styleUrl: './campanha-lista.css',
})
export class CampanhaLista implements OnInit {
  campanhas: Campanha[] = [];
  mensagem = '';
  erro = '';
  carregando = false;
  carregamentoRealizado = false;

  constructor(private campanhasApiService: CampanhasApiService) {}

  ngOnInit(): void {
    this.buscarCampanhas();
  }

  buscarCampanhas(): void {
    this.carregando = true;
    this.erro = '';
    this.mensagem = '';
    this.carregamentoRealizado = false;

    this.campanhasApiService.getAll().subscribe({
      next: (campanhas) => {
        this.campanhas = campanhas;
        this.carregando = false;
        this.carregamentoRealizado = true;
      },
      error: () => {
        this.campanhas = [];
        this.erro = 'Não foi possível carregar as campanhas da API. Verifique se a API está rodando em http://localhost:3000/campanhas.';
        this.carregando = false;
        this.carregamentoRealizado = true;
      },
    });
  }

  excluirCampanha(campanha: Campanha): void {
    const confirmouExclusao = confirm(`Deseja realmente excluir a campanha "${campanha.titulo}"?`);

    if (!confirmouExclusao) {
      return;
    }

    this.campanhas = this.campanhas.filter((item) => item.id !== campanha.id);
    this.mensagem = `Campanha "${campanha.titulo}" removida da tela com sucesso.`;
  }
}
