import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MensagemService } from '../../services/mensagem.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  mensagemErro = '';
  entrando = false;

  formularioLogin = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private mensagemService: MensagemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  entrar(): void {
    this.mensagemErro = '';

    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    this.entrando = true;
    this.formularioLogin.disable();

    this.authService.login(this.formularioLogin.getRawValue()).subscribe({
      next: (usuario) => {
        const returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl') ?? '/admin/campanhas';
        this.mensagemService.mostrarSucesso(`Login realizado com sucesso. Bem-vindo, ${usuario.nome}.`);
        this.router.navigateByUrl(returnUrl);
      },
      error: () => {
        this.mensagemErro = 'E-mail ou senha inválidos. Verifique os dados e tente novamente.';
        this.mensagemService.mostrarErro(this.mensagemErro);
        this.entrando = false;
        this.formularioLogin.enable();
      },
    });
  }

  campoInvalido(nomeCampo: 'email' | 'senha'): boolean {
    const campo = this.formularioLogin.get(nomeCampo);
    return !!campo && campo.invalid && (campo.dirty || campo.touched);
  }
}
