# Catálogo de Disciplinas Acadêmicas

Projeto Angular SPA desenvolvido para o trabalho de faculdade do aluno **ALISSON VITOR LOHN VODZICKI**.

## Tema

Catálogo de Disciplinas Acadêmicas.

O sistema permite visualizar disciplinas acadêmicas e adicionar disciplinas à grade de interesse do aluno.

A partir das Aulas 8, 9, 10, 11, 12 e 13, também foi adicionada uma área de campanhas acadêmicas com formulário, listagem, edição, exclusão, detalhes e integração com API REST.

## Tecnologias usadas

- Angular
- TypeScript
- HTML
- CSS
- Reactive Forms
- LocalStorage
- HttpClient
- API REST mockada com JSON Server
- Interceptor HTTP com token automático

## Rotas principais

- `/home` - página inicial
- `/itens` - listagem de disciplinas
- `/favoritos` - grade de interesse
- `/sobre` - informações do projeto
- `/campanhas` - listagem de campanhas via API REST
- `/campanhas/:id` - detalhe de campanha via API REST
- `/campanha-form` - cadastro de campanha via POST
- `/campanha-form/:id` - formulário reutilizado com preenchimento por ID

## Funcionalidades principais

### Disciplinas

- Visualizar lista de disciplinas.
- Adicionar disciplinas à grade de interesse.
- Remover disciplinas da grade de interesse.
- Exibir itens selecionados em outra rota.
- Uso de `@Input()` no componente filho `card-disciplina`.
- Uso de `@Output()` para enviar eventos do componente filho para o pai.

### Campanhas - Aula 8

- Formulário com os campos:
  - título
  - descrição
  - data limite
  - campanha ativa
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
- Persistência simples usando `localStorage` no formulário na etapa inicial da Aula 9.

### Campanhas - Aula 10

- Configurado `provideHttpClient()` no arquivo `app.config.ts`.
- Criado arquivo `src/app/config/api.config.ts`.
- Criado serviço `CampanhasApiService`.
- Implementado método `getAll()` para buscar campanhas na API REST.
- A página `/campanhas` busca os dados usando `HttpClient`.
- Exibição dos estados:
  - carregando
  - erro
  - vazio
  - sucesso


### Campanhas - Aula 11

- Criada rota `/campanhas/:id`.
- Criada página de detalhe da campanha.
- Criado consumo da API REST por ID.
- Implementado método `getById(id: number)` no `CampanhasApiService`.
- A tela de detalhe usa `ActivatedRoute` para ler o ID da rota.
- A exibição dos estados foi feita com `@if`.
- Tratamento de carregamento.
- Tratamento de erro.
- Adicionado botão **Detalhes** na listagem de campanhas.

### Campanhas - Aula 12

- Criado método `create()` no `CampanhasApiService`.
- Formulário integrado com a API REST.
- Envio de nova campanha via `POST`.
- Controle de loading durante o salvamento.
- Tratamento de erro quando a API não responde.
- Formulário desabilitado durante o envio.
- Redirecionamento automático para `/campanhas` após salvar.
- A rota de edição foi preservada usando busca por ID e atualização via API.

### Campanhas - Aula 13

- Implementado `PUT` no formulário de edição.
- Implementado `DELETE` na listagem de campanhas.
- Mantida a confirmação antes de excluir com `confirm()`.
- Criado interceptor HTTP com token.
- Configurado header automático nas requisições da API.
- O botão de exclusão exibe estado de carregamento durante o DELETE.
- Tratamento de erro caso a exclusão falhe.

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

Para testar a listagem de campanhas:

```txt
http://localhost:4200/campanhas
```

## Como testar os estados da Aula 10

### Estado carregando

Ao abrir `/campanhas`, será exibida a mensagem de carregamento antes da resposta da API.

### Estado sucesso

Com a API rodando e campanhas no arquivo `db.json`, a tela exibirá os cards carregados com sucesso.

### Estado vazio

Altere o arquivo `db.json` para:

```json
{
  "campanhas": []
}
```

Depois reinicie a API com:

```bash
npm run api
```

### Estado erro

Pare a API e abra `/campanhas`. A tela exibirá a mensagem de erro informando que não foi possível carregar os dados.

## Como testar a Aula 11

Com a API rodando, acesse:

```txt
http://localhost:4200/campanhas/1
```

Também é possível acessar os detalhes clicando no botão **Detalhes** em qualquer campanha da listagem.

Para testar erro, pare a API ou acesse um ID inexistente:

```txt
http://localhost:4200/campanhas/999
```



## Como testar a Aula 12

Com a API rodando, acesse:

```txt
http://localhost:4200/campanha-form
```

Preencha os campos obrigatórios e clique em **Salvar campanha**. Durante o envio, o botão exibirá **Salvando...** e ficará desabilitado. Após sucesso, o sistema redirecionará para:

```txt
http://localhost:4200/campanhas
```

A nova campanha aparecerá na listagem carregada pela API REST. Para testar erro, pare a API e tente salvar novamente.



## Como testar a Aula 13

Com a API rodando, acesse:

```txt
http://localhost:4200/campanhas
```

### Testar PUT

Clique em **Editar**, altere uma campanha e clique em **Salvar alterações**. O formulário enviará a atualização usando `PUT` e redirecionará para `/campanhas`.

### Testar DELETE

Clique em **Excluir**, confirme a exclusão e a campanha será removida da API usando `DELETE`. Durante a exclusão, o botão mostra **Excluindo...**.

### Testar interceptor com token

Abra o DevTools do navegador, vá em **Network**, clique em uma requisição para `/campanhas` e confira os headers enviados. O interceptor adiciona automaticamente:

```txt
Authorization: Bearer token-fake-aula-13-catalogo-disciplinas
X-Sistema: Catalogo-Disciplinas-Academicas
```

## Observação

Na Aula 10 foi criada a base de integração REST com `getAll()`. Na Aula 11 foi adicionada a consulta por ID com `getById()`. Na Aula 12 foi implementado o cadastro via `POST` usando `create()`, com loading, erro e redirecionamento após salvar. Na Aula 13 foram implementados `PUT`, `DELETE` e interceptor HTTP com token automático.
