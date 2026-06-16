# Catálogo de Disciplinas Acadêmicas

Projeto Angular SPA desenvolvido para o aluno **ALISSON VITOR LOHN VODZICKI**.

## Tema

Catálogo de Disciplinas Acadêmicas.

O sistema permite visualizar disciplinas acadêmicas, montar uma grade de interesse e demonstrar a evolução do projeto por aulas.

A partir da Aula 8, também foi adicionada uma área de campanhas acadêmicas com formulário, listagem, edição, exclusão, detalhes, integração com API REST, autenticação, guard, lazy loading, loading global e logout.

## Tecnologias usadas

- Angular
- TypeScript
- HTML
- CSS
- Reactive Forms
- LocalStorage
- HttpClient
- API REST mockada com JSON Server
- Interceptor HTTP
- Guard de rotas
- Lazy loading

## Rotas públicas

- `/home` - página inicial
- `/itens` - listagem de disciplinas
- `/favoritos` - grade de interesse
- `/sobre` - informações do projeto
- `/login` - login administrativo

## Rotas administrativas protegidas

- `/admin/campanhas` - listagem de campanhas via API REST
- `/admin/campanhas/:id` - detalhe de campanha via API REST
- `/admin/campanha-form` - cadastro de campanha via POST
- `/admin/campanha-form/:id` - edição de campanha via PUT

As rotas antigas continuam funcionando por redirecionamento:

- `/campanhas` redireciona para `/admin/campanhas`
- `/campanhas/:id` redireciona para `/admin/campanhas/:id`
- `/campanha-form` redireciona para `/admin/campanha-form`
- `/campanha-form/:id` redireciona para `/admin/campanha-form/:id`

## Usuário de teste da Aula 14

Com a API rodando, use:

```txt
E-mail: admin@catalogo.com
Senha: 123456
```

## Funcionalidades principais

### Disciplinas

- Visualizar lista de disciplinas.
- Adicionar disciplinas à grade de interesse.
- Remover disciplinas da grade de interesse.
- Exibir itens selecionados em outra rota.
- Uso de `@Input()` no componente filho `card-disciplina`.
- Uso de `@Output()` para enviar eventos do componente filho para o pai.

### Campanhas - Aula 8

- Formulário com título, descrição, data limite e checkbox ativa.
- Validação obrigatória.
- Validação de tamanho mínimo.
- Mensagens de erro usando `@if`.
- Botão de salvar desabilitado quando o formulário está inválido.

### Campanhas - Aula 9

- Listagem de campanhas usando `@for`.
- Botão de excluir.
- Confirmação antes de excluir.
- Formulário reutilizado para cadastrar e editar.
- Rota de edição.
- Preenchimento automático dos campos ao editar.

### Campanhas - Aula 10

- `provideHttpClient()` configurado no `app.config.ts`.
- Criado `api.config.ts`.
- Criado `CampanhasApiService`.
- Implementado `getAll()`.
- Exibição dos estados carregando, erro, vazio e sucesso.

### Campanhas - Aula 11

- Rota de detalhe por ID.
- Consumo de API por ID.
- Exibição com `@if`.
- Tratamento de loading e erro.

### Campanhas - Aula 12

- Método `create()`.
- Envio via `POST`.
- Controle de loading ao salvar.
- Tratamento de erro.
- Redirecionamento após salvar.

### Campanhas - Aula 13

- `PUT` no formulário de edição.
- `DELETE` na listagem.
- Confirmação antes de excluir.
- Interceptor com token fake.
- Header automático.

### Aula 14

- Login real com API usando endpoint `usuarios`.
- Salvamento do token no navegador com `localStorage`.
- Guard protegendo rotas administrativas.
- Lazy loading nas rotas protegidas.
- Interceptor adicionando o token salvo no header `Authorization`.
- Loading global em requisições HTTP.
- Mensagens globais de sucesso e erro.
- Logout removendo token e redirecionando para login.

## Como executar

Instale as dependências:

```bash
npm install
```

Execute a API mockada em um terminal:

```bash
npm run api
```

Em outro terminal, execute o projeto Angular:

```bash
npm start
```

Acesse no navegador:

```txt
http://localhost:4200
```

## Como testar a Aula 14

Acesse diretamente uma rota protegida:

```txt
http://localhost:4200/admin/campanhas
```

Se você não estiver logado, o guard redireciona para:

```txt
http://localhost:4200/login
```

Depois de fazer login, o token é salvo no navegador e as requisições passam a enviar automaticamente:

```txt
Authorization: Bearer token-api-aula-14-catalogo-disciplinas
X-Sistema: Catalogo-Disciplinas-Academicas
```

Para ver isso, abra o DevTools, acesse a aba **Network** e clique em uma requisição para `/campanhas`.

## Observação

Este projeto usa `json-server` como API mockada. O login é feito consultando o endpoint `/usuarios` no arquivo `db.json`, o que permite demonstrar a integração real com uma API dentro do contexto acadêmico.
