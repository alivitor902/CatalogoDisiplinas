import { Injectable } from '@angular/core';
import { Campanha } from '../models/campanha.model';

@Injectable({
  providedIn: 'root',
})
export class CampanhaService {
  private readonly chaveArmazenamento = 'campanhas-academicas';

  private campanhas: Campanha[] = [
    {
      id: 1,
      titulo: 'Semana Acadêmica de Tecnologia',
      descricao: 'Campanha para divulgar palestras e atividades da semana acadêmica.',
      dataLimite: '2026-07-10',
      ativa: true,
    },
    {
      id: 2,
      titulo: 'Inscrição em Disciplinas Optativas',
      descricao: 'Campanha para incentivar os alunos a escolherem disciplinas optativas.',
      dataLimite: '2026-07-20',
      ativa: true,
    },
    {
      id: 3,
      titulo: 'Atualização da Grade de Interesse',
      descricao: 'Campanha para que os alunos revisem sua grade de interesse acadêmica.',
      dataLimite: '2026-08-05',
      ativa: true,
    },
  ];

  constructor() {
    this.carregarCampanhasSalvas();
  }

  listarCampanhas(): Campanha[] {
    return [...this.campanhas];
  }

  buscarCampanhaPorId(id: number): Campanha | undefined {
    return this.campanhas.find((campanha) => campanha.id === id);
  }

  salvarCampanha(dadosCampanha: Omit<Campanha, 'id'>): Campanha {
    const novaCampanha: Campanha = {
      id: this.gerarProximoId(),
      ...dadosCampanha,
    };

    this.campanhas.push(novaCampanha);
    this.salvarNoArmazenamento();

    return novaCampanha;
  }

  atualizarCampanha(id: number, dadosCampanha: Omit<Campanha, 'id'>): void {
    this.campanhas = this.campanhas.map((campanha) => {
      if (campanha.id === id) {
        return {
          id,
          ...dadosCampanha,
        };
      }

      return campanha;
    });

    this.salvarNoArmazenamento();
  }

  excluirCampanha(id: number): void {
    this.campanhas = this.campanhas.filter((campanha) => campanha.id !== id);
    this.salvarNoArmazenamento();
  }

  private gerarProximoId(): number {
    if (this.campanhas.length === 0) {
      return 1;
    }

    const maiorId = Math.max(...this.campanhas.map((campanha) => campanha.id));
    return maiorId + 1;
  }

  private carregarCampanhasSalvas(): void {
    const campanhasSalvas = localStorage.getItem(this.chaveArmazenamento);

    if (campanhasSalvas) {
      this.campanhas = JSON.parse(campanhasSalvas);
    }
  }

  private salvarNoArmazenamento(): void {
    localStorage.setItem(this.chaveArmazenamento, JSON.stringify(this.campanhas));
  }
}
