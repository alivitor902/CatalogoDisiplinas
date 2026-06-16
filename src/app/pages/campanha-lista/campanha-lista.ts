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
  erroExclusao = '';
  carregando = false;
  carregamentoRealizado = false;
  excluindoId: number | null = null;

  constructor(private campanhasApiService: CampanhasApiService) {}

  ngOnInit(): void {
    this.buscarCampanhas();
  }

  buscarCampanhas(): void {
    this.carregando = true;
    this.erro = '';
    this.erroExclusao = '';
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

    this.mensagem = '';
    this.erroExclusao = '';
    this.excluindoId = campanha.id;

    this.campanhasApiService.delete(campanha.id).subscribe({
      next: () => {
        this.campanhas = this.campanhas.filter((item) => item.id !== campanha.id);
        this.mensagem = `Campanha "${campanha.titulo}" excluída com sucesso da API.`;
        this.excluindoId = null;
      },
      error: () => {
        this.erroExclusao = `Não foi possível excluir a campanha "${campanha.titulo}". Verifique se a API está rodando e tente novamente.`;
        this.excluindoId = null;
      },
    });
  }
}
