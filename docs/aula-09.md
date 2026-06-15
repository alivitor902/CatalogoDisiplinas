# Aula 9 - Listagem, edição e exclusão de campanhas

Nesta versão foi implementada a continuação do formulário criado na Aula 8.

## Funcionalidades criadas

- Página de listagem de campanhas em `/campanhas`.
- Uso de `@for` para percorrer e exibir a lista.
- Botão de excluir em cada campanha.
- Confirmação com `confirm()` antes de excluir.
- Formulário de campanha reutilizado para cadastro e edição.
- Rota de edição em `/campanha-form/:id`.
- Preenchimento automático dos campos ao editar uma campanha.
- Serviço `CampanhaService` para centralizar cadastro, edição, exclusão e listagem.
- Persistência simples usando `localStorage`.

## Rotas adicionadas ou atualizadas

- `/campanhas` - listagem de campanhas.
- `/campanha-form` - cadastro de nova campanha.
- `/campanha-form/:id` - edição de campanha existente.

## Principais arquivos

- `src/app/models/campanha.model.ts`
- `src/app/services/campanha.service.ts`
- `src/app/pages/campanha-lista/campanha-lista.ts`
- `src/app/pages/campanha-lista/campanha-lista.html`
- `src/app/pages/campanha-lista/campanha-lista.css`
- `src/app/pages/campanha-form/campanha-form.ts`
- `src/app/pages/campanha-form/campanha-form.html`
- `src/app/app.routes.ts`
- `src/app/app.html`
