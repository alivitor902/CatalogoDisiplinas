# Aula 14 - Login, Guard, Lazy Loading e Loading Global

Nesta aula foi criada a base de autenticação da área administrativa do projeto.

## O que foi implementado

- Login real consultando a API mockada com JSON Server.
- Endpoint de usuários no arquivo `db.json`.
- Salvamento do token no navegador usando `localStorage`.
- Serviço `AuthService` para login, logout, verificação de autenticação e leitura do token.
- Guard `authGuard` protegendo as rotas administrativas.
- Área administrativa com rotas protegidas em `/admin`.
- Lazy loading das rotas protegidas usando `loadChildren`.
- Interceptor adicionando automaticamente o token no header `Authorization`.
- Header automático `X-Sistema` em todas as requisições HTTP.
- Loading global para requisições HTTP.
- Mensagens globais de sucesso e erro.
- Logout pelo menu superior.

## Arquivos criados

- `src/app/pages/login/login.ts`
- `src/app/pages/login/login.html`
- `src/app/pages/login/login.css`
- `src/app/services/auth.service.ts`
- `src/app/services/loading.service.ts`
- `src/app/services/mensagem.service.ts`
- `src/app/guards/auth.guard.ts`
- `src/app/admin/admin.routes.ts`

## Arquivos alterados

- `src/app/app.routes.ts`
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.css`
- `src/app/app.config.ts`
- `src/app/interceptors/auth-token.interceptor.ts`
- `src/app/config/api.config.ts`
- `src/app/pages/campanha-lista/*`
- `src/app/pages/campanha-form/*`
- `src/app/pages/campanha-detalhe/*`
- `db.json`
- `README.md`
- `CHANGELOG.md`

## Rotas da Aula 14

### Pública

- `/login`

### Administrativas protegidas

- `/admin/campanhas`
- `/admin/campanhas/:id`
- `/admin/campanha-form`
- `/admin/campanha-form/:id`

As rotas antigas continuam redirecionando para a área administrativa:

- `/campanhas` → `/admin/campanhas`
- `/campanhas/:id` → `/admin/campanhas/:id`
- `/campanha-form` → `/admin/campanha-form`
- `/campanha-form/:id` → `/admin/campanha-form/:id`

## Usuário de teste

Com a API rodando, utilize:

```txt
E-mail: admin@catalogo.com
Senha: 123456
```

## Como testar

Execute a API:

```bash
npm run api
```

Execute o Angular em outro terminal:

```bash
npm start
```

Acesse:

```txt
http://localhost:4200/admin/campanhas
```

Se não estiver logado, o guard redireciona para:

```txt
http://localhost:4200/login
```

Após o login, o token é salvo no navegador e o sistema redireciona para a rota administrativa.

## Como verificar o token no header

1. Abra o DevTools do navegador.
2. Vá até a aba **Network**.
3. Acesse `/admin/campanhas`.
4. Clique na requisição para `http://localhost:3000/campanhas`.
5. Verifique os headers:

```txt
Authorization: Bearer token-api-aula-14-catalogo-disciplinas
X-Sistema: Catalogo-Disciplinas-Academicas
```

## Logout

Depois de logado, o menu superior exibe o botão **Logout**. Ao clicar, o token é removido do `localStorage` e o usuário volta para a tela de login.
