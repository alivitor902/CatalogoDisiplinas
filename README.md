# Catálogo de Disciplinas Acadêmicas

Projeto Angular SPA desenvolvido para o trabalho de faculdade do aluno **ALISSON VITOR LOHN VODZICKI**.

## Tema

Catálogo de Disciplinas Acadêmicas.

O sistema permite visualizar disciplinas acadêmicas e adicionar disciplinas à grade de interesse do aluno.

A partir da Aula 8 e Aula 9, também foi adicionada uma área de campanhas acadêmicas com formulário, listagem, edição e exclusão.

## Tecnologias usadas

- Angular
- TypeScript
- HTML
- CSS
- Reactive Forms
- LocalStorage

## Rotas principais

- `/home` - página inicial
- `/itens` - listagem de disciplinas
- `/favoritos` - grade de interesse
- `/sobre` - informações do projeto
- `/campanhas` - listagem de campanhas
- `/campanha-form` - cadastro de campanha
- `/campanha-form/:id` - edição de campanha

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
- Persistência simples usando `localStorage`.

## Como executar

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm start
```

Acesse no navegador:

```txt
http://localhost:4200
```

## Observação

O projeto usa listas locais em memória e `localStorage`. Não é obrigatório usar API para este trabalho.
