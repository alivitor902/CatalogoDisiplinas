# Histórico de versões

## v1.8.0-aula-08

- Criada a página `campanha-form`.
- Adicionada a rota `/campanha-form`.
- Adicionado link de navegação para a página Campanha.
- Criado formulário com os campos:
  - título;
  - descrição;
  - data limite;
  - checkbox ativa.
- Implementada validação obrigatória.
- Implementada validação de tamanho mínimo para título e descrição.
- Criadas mensagens de erro usando `@if` no HTML.
- Botão de salvar desabilitado enquanto o formulário estiver inválido.
- Página Sobre atualizada para registrar o uso de Reactive Forms.

## v1.0.0-aula-01

- Criação inicial do projeto Angular SPA.
- Rotas Home, Listagem, Favoritos e Sobre.
- Tema: Catálogo de Disciplinas Acadêmicas.
- Componente filho reutilizável `CardDisciplina`.
- Uso de `@Input()` para receber dados no card.
- Uso de `@Output()` para emitir eventos do card para a página de listagem.
- Lista local de disciplinas em memória.
- Grade de interesse com adição, visualização e remoção de disciplinas.
