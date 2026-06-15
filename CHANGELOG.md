# Histórico de versões

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
