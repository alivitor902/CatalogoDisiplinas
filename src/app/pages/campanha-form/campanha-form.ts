import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CampanhasApiService, NovaCampanha } from '../../services/campanhas-api.service';

@Component({
  selector: 'app-campanha-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './campanha-form.html',
  styleUrls: ['./campanha-form.css'],
})
export class CampanhaForm implements OnInit {
  mensagemSucesso = '';
  mensagemErro = '';
  campanhaId: number | null = null;
  modoEdicao = false;
  salvando = false;
  carregandoCampanha = false;

  formularioCampanha = this.formBuilder.nonNullable.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required, Validators.minLength(10)]],
    dataLimite: ['', [Validators.required]],
    ativa: [false, [Validators.requiredTrue]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private campanhasApiService: CampanhasApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.verificarModoEdicao();
  }

  salvarCampanha(): void {
    this.mensagemSucesso = '';
    this.mensagemErro = '';

    if (this.formularioCampanha.invalid) {
      this.formularioCampanha.markAllAsTouched();
      return;
    }

    const dadosCampanha: NovaCampanha = this.formularioCampanha.getRawValue();

    this.salvando = true;
    this.formularioCampanha.disable();

    if (this.modoEdicao && this.campanhaId !== null) {
      this.campanhasApiService.update(this.campanhaId, dadosCampanha).subscribe({
        next: (campanhaAtualizada) => {
          this.mensagemSucesso = `Campanha \"${campanhaAtualizada.titulo}\" atualizada com sucesso na API!`;
          this.salvando = false;

          setTimeout(() => {
            this.router.navigate(['/campanhas']);
          }, 700);
        },
        error: () => {
          this.mensagemErro = 'Não foi possível atualizar a campanha na API. Verifique se o json-server está rodando e se o ID existe.';
          this.salvando = false;
          this.formularioCampanha.enable();
        },
      });

      return;
    }

    this.campanhasApiService.create(dadosCampanha).subscribe({
      next: (campanhaCriada) => {
        this.mensagemSucesso = `Campanha "${campanhaCriada.titulo}" salva com sucesso na API!`;
        this.salvando = false;

        setTimeout(() => {
          this.router.navigate(['/campanhas']);
        }, 700);
      },
      error: () => {
        this.mensagemErro = 'Não foi possível salvar a campanha na API. Verifique se o json-server está rodando em http://localhost:3000/campanhas.';
        this.salvando = false;
        this.formularioCampanha.enable();
      },
    });
  }

  campoInvalido(nomeCampo: 'titulo' | 'descricao' | 'dataLimite' | 'ativa'): boolean {
    const campo = this.formularioCampanha.get(nomeCampo);
    return !!campo && campo.invalid && (campo.dirty || campo.touched);
  }

  private verificarModoEdicao(): void {
    const idParametro = this.activatedRoute.snapshot.paramMap.get('id');

    if (!idParametro) {
      return;
    }

    this.campanhaId = Number(idParametro);

    if (!this.campanhaId) {
      this.mensagemErro = 'Identificador da campanha inválido.';
      return;
    }

    this.modoEdicao = true;
    this.carregandoCampanha = true;
    this.formularioCampanha.disable();

    this.campanhasApiService.getById(this.campanhaId).subscribe({
      next: (campanhaEncontrada) => {
        this.formularioCampanha.patchValue({
          titulo: campanhaEncontrada.titulo,
          descricao: campanhaEncontrada.descricao,
          dataLimite: campanhaEncontrada.dataLimite,
          ativa: campanhaEncontrada.ativa,
        });

        this.carregandoCampanha = false;
        this.formularioCampanha.enable();
      },
      error: () => {
        this.mensagemErro = 'Campanha não encontrada na API. Verifique se a API está rodando e se o ID existe.';
        this.carregandoCampanha = false;
      },
    });
  }
}
