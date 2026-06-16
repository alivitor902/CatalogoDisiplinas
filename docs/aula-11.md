# Aula 11 - Detalhe de campanha por API REST

Nesta versão foi criada a tela de detalhe de campanha usando uma rota com parâmetro e consumo da API REST por ID.

## Requisitos atendidos

- Criada rota `/campanhas/:id`.
- Criada página de detalhe da campanha.
- Criado consumo de API por ID no `CampanhasApiService`.
- Adicionado método `getById(id: number)`.
- A página de detalhe lê o ID da rota usando `ActivatedRoute`.
- A página busca os dados da campanha na API REST.
- A exibição da tela usa `@if`.
- Tratamento de carregamento.
- Tratamento de erro.
- Link de acesso aos detalhes na listagem de campanhas.

## Arquivos criados

```txt
src/app/pages/campanha-detalhe/campanha-detalhe.ts
src/app/pages/campanha-detalhe/campanha-detalhe.html
src/app/pages/campanha-detalhe/campanha-detalhe.css
```

## Arquivos alterados

```txt
src/app/app.routes.ts
src/app/services/campanhas-api.service.ts
src/app/pages/campanha-lista/campanha-lista.html
src/app/pages/campanha-lista/campanha-lista.css
CHANGELOG.md
README.md
package.json
```

## Como testar

Execute a API:

```bash
npm run api
```

Execute o Angular:

```bash
npm start
```

Acesse a listagem:

```txt
http://localhost:4200/campanhas
```

Clique em **Detalhes** em uma campanha ou acesse diretamente:

```txt
http://localhost:4200/campanhas/1
```

## Testes dos estados

### Loading

Ao abrir a página de detalhe, a mensagem de carregamento aparece antes da resposta da API.

### Sucesso

Com a API rodando e um ID existente, a tela exibe os dados da campanha.

### Erro

Para testar erro, pare a API ou acesse um ID inexistente, por exemplo:

```txt
http://localhost:4200/campanhas/999
```
