# Catálogo de Disciplinas Acadêmicas

Projeto Angular SPA desenvolvido para atender aos requisitos de rotas, componentização, uso de `@Input()`, uso de `@Output()` e lista de favoritos/selecionados.

## Aluno

ALISSON VITOR LOHN VODZICKI

## Tema

Catálogo de Disciplinas Acadêmicas

## Funcionalidades

- Página Home com nome do sistema, descrição, menu e botão para acessar a listagem.
- Página de Listagem com disciplinas acadêmicas.
- Componente filho reutilizável `CardDisciplina`.
- Uso de `@Input()` para enviar os dados da disciplina para o card.
- Uso de `@Output()` para adicionar ou remover uma disciplina da grade de interesse.
- Página Favoritos/Grade de Interesse mostrando os itens selecionados.
- Remoção de itens da grade de interesse.
- Página Sobre com aluno, tema, objetivo e tecnologias usadas.
- Navegação por rotas usando `routerLink`.
- Página `campanha-form` da Aula 8 com formulário reativo, validações e mensagens usando `@if`.

## Rotas

- `/home`
- `/itens`
- `/favoritos`
- `/sobre`
- `/campanha-form`

## Como executar

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm start
```

Depois acesse no navegador:

```txt
http://localhost:4200
```

## Estrutura principal

```txt
src/app/
├── app.config.ts
├── app.routes.ts
├── app.ts
├── app.html
├── app.css
├── models/
│   └── disciplina.model.ts
├── services/
│   └── grade-interesse.service.ts
├── components/
│   └── card-disciplina/
└── pages/
    ├── home/
    ├── disciplinas/
    ├── interesses/
    ├── sobre/
    └── campanha-form/
```


## Aula 8

Foi adicionada a página `campanha-form` com:

- campo título;
- campo descrição;
- campo data limite;
- checkbox ativa;
- validação obrigatória;
- validação de tamanho mínimo;
- mensagens de erro usando `@if`;
- botão de salvar desabilitado quando o formulário estiver inválido.

Arquivo de detalhes: `docs/aula-08.md`.

Histórico completo: `CHANGELOG.md`.
