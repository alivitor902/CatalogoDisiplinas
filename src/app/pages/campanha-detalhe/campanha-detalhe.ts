import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Campanha } from '../../models/campanha.model';
import { CampanhasApiService } from '../../services/campanhas-api.service';
import { MensagemService } from '../../services/mensagem.service';

@Component({
  selector: 'app-campanha-detalhe',
  imports: [RouterLink],
  templateUrl: './campanha-detalhe.html',
  styleUrl: './campanha-detalhe.css',
})
export class CampanhaDetalhe implements OnInit {
  campanha: Campanha | null = null;
  carregando = false;
  erro = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private campanhasApiService: CampanhasApiService,
    private mensagemService: MensagemService
  ) {}

  ngOnInit(): void {
    const idRecebido = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (!idRecebido) {
      this.erro = 'Identificador da campanha inválido.';
      this.mensagemService.mostrarErro(this.erro);
      return;
    }

    this.buscarCampanhaPorId(idRecebido);
  }

  buscarCampanhaPorId(id: number): void {
    this.carregando = true;
    this.erro = '';
    this.campanha = null;

    this.campanhasApiService.getById(id).subscribe({
      next: (campanha) => {
        this.campanha = campanha;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Não foi possível carregar os detalhes da campanha. Verifique se a API está rodando e se o ID existe.';
        this.mensagemService.mostrarErro(this.erro);
        this.carregando = false;
      },
    });
  }
}
