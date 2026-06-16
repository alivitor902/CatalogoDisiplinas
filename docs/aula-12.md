# Aula 12 - Criação de campanhas via API REST

## Objetivo da aula

Implementar a base de cadastro de campanhas usando integração com API REST.

## Requisitos solicitados

- Criar método `create()` no service.
- Integrar o formulário com o service de API.
- Enviar os dados via `POST`.
- Controlar estado de loading durante o salvamento.
- Tratar erro de comunicação com a API.
- Redirecionar para a listagem após salvar.

## Arquivos alterados

- `src/app/services/campanhas-api.service.ts`
- `src/app/pages/campanha-form/campanha-form.ts`
- `src/app/pages/campanha-form/campanha-form.html`
- `src/app/pages/campanha-form/campanha-form.css`
- `src/app/pages/campanha-lista/campanha-lista.html`
- `README.md`
- `CHANGELOG.md`
- `package.json`

## O que foi implementado

### 1. Método `create()` no service

O service `CampanhasApiService` agora possui o método:

```ts
create(campanha: NovaCampanha): Observable<Campanha> {
  return this.httpClient.post<Campanha>(this.urlCampanhas, campanha).pipe(delay(500));
}
```

Esse método envia uma nova campanha para a API usando `POST`.

### 2. Integração com o formulário

O formulário `campanha-form` passou a usar o `CampanhasApiService` para salvar novas campanhas. A rota de edição também foi mantida funcionando com atualização via API para preservar a reutilização do formulário.

Ao clicar em salvar, o sistema:

1. Valida o formulário.
2. Monta o objeto da campanha.
3. Chama `campanhasApiService.create(...)`.
4. Exibe estado de carregamento.
5. Redireciona para `/campanhas` após sucesso.

### 3. Controle de loading

Durante o envio, o botão muda para:

```txt
Salvando...
```

O formulário também fica desabilitado para evitar clique duplicado.

### 4. Tratamento de erro

Se a API não estiver rodando, a tela exibe uma mensagem orientando a verificar o endereço:

```txt
http://localhost:3000/campanhas
```

### 5. Redirecionamento após salvar

Depois que a campanha é salva corretamente na API, o usuário é redirecionado para:

```txt
/campanhas
```

## Como testar

Execute a API:

```bash
npm run api
```

Em outro terminal, execute o Angular:

```bash
npm start
```

Acesse:

```txt
http://localhost:4200/campanha-form
```

Preencha os campos e clique em **Salvar campanha**.

Depois do salvamento, o sistema volta para a listagem:

```txt
http://localhost:4200/campanhas
```

A nova campanha aparecerá na listagem carregada da API.

## Como testar erro

Pare a API e tente salvar uma campanha. A tela exibirá a mensagem de erro de comunicação.
