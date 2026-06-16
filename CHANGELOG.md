# Histórico de versões

## v1.11.0 - Aula 11

- Criada rota `/campanhas/:id`.
- Criada página de detalhe de campanha.
- Adicionado consumo da API REST por ID.
- Implementado método `getById(id: number)` no `CampanhasApiService`.
- A página de detalhe lê o parâmetro da rota usando `ActivatedRoute`.
- Adicionada exibição com `@if`.
- Adicionado tratamento de carregamento.
- Adicionado tratamento de erro.
- Adicionado botão `Detalhes` na listagem de campanhas.
- Criado documento `docs/aula-11.md`.

## v1.10.0 - Aula 10

- Configurado `provideHttpClient()` no arquivo `app.config.ts`.
- Criado arquivo `src/app/config/api.config.ts` com a URL base da API.
- Criado serviço `CampanhasApiService`.
- Implementado método `getAll()` no serviço de API.
- Atualizada a página `/campanhas` para buscar campanhas usando `HttpClient`.
- Adicionado estado de carregamento.
- Adicionado estado de erro quando a API não responde.
- Adicionado estado vazio quando a API retorna uma lista sem registros.
- Adicionado estado de sucesso quando a API retorna campanhas.
- Criado arquivo `db.json` para simular API REST com JSON Server.
- Adicionado script `npm run api` ao `package.json`.
- Criado documento `docs/aula-10.md`.

## v1.9.0 - Aula 9

- Criada página de listagem de campanhas com `@for`.
- Adicionado botão de excluir campanha.
- Adicionada confirmação antes da exclusão usando `confirm()`.
- Reutilizado o formulário de campanha da Aula 8 para cadastro e edição.
- Criada rota de edição `/campanha-form/:id`.
- Implementado preenchimento automático dos dados no formulário de edição.
- Criado `CampanhaService` para gerenciar campanhas.
- Criado model `Campanha`.
- Adicionada rota `/campanhas`.
- Atualizado menu principal com links para campanhas e nova campanha.
- Adicionada persistência simples com `localStorage`.
- Criado documento `docs/aula-09.md`.

## v1.8.0 - Aula 8

- Criada página `campanha-form`.
- Adicionada rota `/campanha-form`.
- Adicionado link no menu para campanha.
- Criado formulário com campos `titulo`, `descricao`, `dataLimite` e `ativa`.
- Adicionadas validações obrigatórias.
- Adicionadas validações de tamanho mínimo.
- Adicionadas mensagens de erro usando `@if`.
- Botão de salvar desabilitado quando o formulário está inválido.
- Criado documento `docs/aula-08.md`.

## v1.0.0 - Versão inicial

- Criação inicial do projeto Angular SPA.
- Rotas `/home`, `/itens`, `/favoritos` e `/sobre`.
- Página Home.
- Página de listagem de disciplinas.
- Página de grade de interesse.
- Página Sobre.
- Componente filho `card-disciplina`.
- Uso de `@Input()`.
- Uso de `@Output()`.
- Lista local de disciplinas.
- Service para manter a grade de interesse entre rotas.
