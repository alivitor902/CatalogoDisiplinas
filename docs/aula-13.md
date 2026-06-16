# Aula 13 - PUT, DELETE e Interceptor com Token

Nesta aula foi evoluída a base de integração com API REST do módulo de campanhas.

## Requisitos da Aula 13

- Implementar `PUT` no formulário.
- Implementar `DELETE` na lista.
- Confirmar antes de excluir.
- Criar interceptor com token.
- Adicionar header automático nas requisições HTTP.

## Arquivos criados ou alterados

```txt
src/app/config/api.config.ts
src/app/interceptors/auth-token.interceptor.ts
src/app/app.config.ts
src/app/services/campanhas-api.service.ts
src/app/pages/campanha-form/campanha-form.ts
src/app/pages/campanha-form/campanha-form.html
src/app/pages/campanha-lista/campanha-lista.ts
src/app/pages/campanha-lista/campanha-lista.html
src/app/pages/campanha-lista/campanha-lista.css
```

## Interceptor com token

Foi criado o arquivo:

```txt
src/app/interceptors/auth-token.interceptor.ts
```

Esse interceptor adiciona automaticamente os headers:

```txt
Authorization: Bearer token-fake-aula-13-catalogo-disciplinas
X-Sistema: Catalogo-Disciplinas-Academicas
```

Assim, todas as requisições feitas pelo `HttpClient` recebem o token sem precisar repetir essa configuração dentro de cada método do service.

## Configuração no app.config.ts

O `provideHttpClient()` foi atualizado para usar o interceptor:

```ts
provideHttpClient(withInterceptors([authTokenInterceptor]))
```

## PUT no formulário

A rota de edição continua sendo:

```txt
/campanha-form/:id
```

Ao abrir a edição, o formulário busca os dados pelo ID e preenche automaticamente os campos. Ao salvar, o método `update()` do service envia a alteração para a API usando `PUT`.

## DELETE na lista

Na página:

```txt
/campanhas
```

O botão **Excluir** agora envia uma requisição `DELETE` para a API.

Antes de excluir, o sistema mostra uma confirmação usando `confirm()`.

Se o usuário confirmar, a campanha é excluída da API e removida da lista exibida na tela.

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
http://localhost:4200/campanhas
```

### Testar PUT

1. Clique em **Editar** em uma campanha.
2. Altere os dados.
3. Clique em **Salvar alterações**.
4. O formulário enviará uma requisição `PUT`.
5. Após salvar, o sistema redirecionará para `/campanhas`.

### Testar DELETE

1. Acesse `/campanhas`.
2. Clique em **Excluir**.
3. Confirme a exclusão.
4. A campanha será removida pela API usando `DELETE`.

### Testar o header automático

Abra o DevTools do navegador, vá na aba **Network**, clique em uma requisição para `/campanhas` e confira os headers da requisição.

Deve aparecer o header `Authorization` com o token automático.
