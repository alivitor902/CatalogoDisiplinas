import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CampanhaService } from '../../services/campanha.service';

@Component({
  selector: 'app-campanha-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './campanha-form.html',
  styleUrls: ['./campanha-form.css'],
})
export class CampanhaForm {
  mensagemSucesso = '';
  campanhaId: number | null = null;
  modoEdicao = false;

  formularioCampanha = this.formBuilder.nonNullable.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required, Validators.minLength(10)]],
    dataLimite: ['', [Validators.required]],
    ativa: [false, [Validators.requiredTrue]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private campanhaService: CampanhaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.verificarModoEdicao();
  }

  salvarCampanha(): void {
    if (this.formularioCampanha.invalid) {
      this.formularioCampanha.markAllAsTouched();
      return;
    }

    const dadosCampanha = this.formularioCampanha.getRawValue();

    if (this.modoEdicao && this.campanhaId !== null) {
      this.campanhaService.atualizarCampanha(this.campanhaId, dadosCampanha);
      this.mensagemSucesso = `Campanha "${dadosCampanha.titulo}" atualizada com sucesso!`;
    } else {
      this.campanhaService.salvarCampanha(dadosCampanha);
      this.mensagemSucesso = `Campanha "${dadosCampanha.titulo}" salva com sucesso!`;
    }

    setTimeout(() => {
      this.router.navigate(['/campanhas']);
    }, 600);
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
    this.modoEdicao = true;

    const campanhaEncontrada = this.campanhaService.buscarCampanhaPorId(this.campanhaId);

    if (!campanhaEncontrada) {
      this.mensagemSucesso = 'Campanha não encontrada. Cadastre uma nova campanha.';
      this.modoEdicao = false;
      this.campanhaId = null;
      return;
    }

    this.formularioCampanha.patchValue({
      titulo: campanhaEncontrada.titulo,
      descricao: campanhaEncontrada.descricao,
      dataLimite: campanhaEncontrada.dataLimite,
      ativa: campanhaEncontrada.ativa,
    });
  }
}
