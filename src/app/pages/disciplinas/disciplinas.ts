import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDisciplina } from '../../components/card-disciplina/card-disciplina';
import { Disciplina } from '../../models/disciplina.model';
import { GradeInteresseService } from '../../services/grade-interesse.service';

@Component({
  selector: 'app-disciplinas',
  imports: [CommonModule, CardDisciplina],
  templateUrl: './disciplinas.html',
  styleUrls: ['./disciplinas.css'],
})
export class Disciplinas {
  mensagem = '';

  disciplinas: Disciplina[] = [
    {
      id: 1,
      nome: 'Programação Orientada a Objetos',
      descricao: 'Estudo de classes, objetos, encapsulamento, herança, polimorfismo e organização de sistemas orientados a objetos.',
      cargaHoraria: 80,
      professor: 'Rodrigo Silva',
      periodo: '3º período',
      categoria: 'Programação',
      status: 'Disponível',
    },
    {
      id: 2,
      nome: 'Banco de Dados',
      descricao: 'Modelagem de dados, criação de tabelas, relacionamentos, comandos SQL e consultas em bancos relacionais.',
      cargaHoraria: 60,
      professor: 'Mariana Souza',
      periodo: '2º período',
      categoria: 'Dados',
      status: 'Disponível',
    },
    {
      id: 3,
      nome: 'Engenharia de Software',
      descricao: 'Levantamento de requisitos, documentação técnica, análise de sistemas e organização de projetos de software.',
      cargaHoraria: 60,
      professor: 'Carlos Oliveira',
      periodo: '4º período',
      categoria: 'Gestão de Projetos',
      status: 'Disponível',
    },
    {
      id: 4,
      nome: 'Desenvolvimento Web',
      descricao: 'Criação de aplicações web utilizando HTML, CSS, TypeScript, rotas, componentes e boas práticas de interface.',
      cargaHoraria: 80,
      professor: 'Ana Pereira',
      periodo: '3º período',
      categoria: 'Web',
      status: 'Disponível',
    },
    {
      id: 5,
      nome: 'Estrutura de Dados',
      descricao: 'Estudo de listas, pilhas, filas, árvores, vetores e algoritmos para manipulação eficiente de dados.',
      cargaHoraria: 80,
      professor: 'Fernanda Lima',
      periodo: '2º período',
      categoria: 'Algoritmos',
      status: 'Disponível',
    },
    {
      id: 6,
      nome: 'Projeto Integrador',
      descricao: 'Desenvolvimento de uma solução prática unindo requisitos, programação, testes, documentação e apresentação final.',
      cargaHoraria: 100,
      professor: 'João Martins',
      periodo: '5º período',
      categoria: 'Projeto',
      status: 'Disponível',
    },
  ];

  constructor(private gradeInteresseService: GradeInteresseService) {}

  adicionarNaGrade(disciplina: Disciplina): void {
    this.gradeInteresseService.adicionarDisciplina(disciplina);
    this.mensagem = `${disciplina.nome} foi adicionada à grade de interesse.`;
  }

  removerDaGrade(id: number): void {
    this.gradeInteresseService.removerDisciplina(id);
    this.mensagem = 'Disciplina removida da grade de interesse.';
  }

  verificarSelecionada(id: number): boolean {
    return this.gradeInteresseService.verificarSelecionada(id);
  }
}
