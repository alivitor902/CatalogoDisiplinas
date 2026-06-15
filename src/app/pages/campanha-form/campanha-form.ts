import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-campanha-form',
  imports: [ReactiveFormsModule],
  templateUrl: './campanha-form.html',
  styleUrls: ['./campanha-form.css'],
})
export class CampanhaForm {
  mensagemSucesso = '';

  formularioCampanha = this.formBuilder.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required, Validators.minLength(10)]],
    dataLimite: ['', [Validators.required]],
    ativa: [false, [Validators.requiredTrue]],
  });

  constructor(private formBuilder: FormBuilder) {}

  salvarCampanha(): void {
    if (this.formularioCampanha.invalid) {
      this.formularioCampanha.markAllAsTouched();
      return;
    }

    const campanha = this.formularioCampanha.value;

    this.mensagemSucesso = `Campanha "${campanha.titulo}" salva com sucesso!`;
    console.log('Campanha salva:', campanha);

    this.formularioCampanha.reset({
      titulo: '',
      descricao: '',
      dataLimite: '',
      ativa: false,
    });
  }

  campoInvalido(nomeCampo: 'titulo' | 'descricao' | 'dataLimite' | 'ativa'): boolean {
    const campo = this.formularioCampanha.get(nomeCampo);
    return !!campo && campo.invalid && (campo.dirty || campo.touched);
  }
}
