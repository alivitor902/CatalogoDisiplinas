# Aula 10 - Base de Integração com API REST

## Objetivo

Criar a base da integração do projeto Angular com uma API REST para buscar campanhas cadastradas.

## Requisitos solicitados

- Configurar `provideHttpClient()` no `app.config.ts`.
- Criar `api.config.ts`.
- Criar `CampanhasApiService`.
- Implementar `getAll()`.
- Buscar campanhas no componente.
- Exibir os estados:
  - carregando
  - erro
  - vazio
  - sucesso

## Arquivos criados ou alterados

```txt
src/app/app.config.ts
src/app/config/api.config.ts
src/app/services/campanhas-api.service.ts
src/app/pages/campanha-lista/campanha-lista.ts
src/app/pages/campanha-lista/campanha-lista.html
src/app/pages/campanha-lista/campanha-lista.css
db.json
package.json
README.md
CHANGELOG.md
```

## Configuração do HttpClient

No arquivo `src/app/app.config.ts`, foi adicionado:

```ts
import { provideHttpClient } from '@angular/common/http';
```

E dentro dos providers:

```ts
provideHttpClient()
```

## Configuração da API

Foi criado o arquivo:

```txt
src/app/config/api.config.ts
```

Com a configuração:

```ts
export const API_CONFIG = {
  baseUrl: 'http://localhost:3000',
  endpoints: {
    campanhas: '/campanhas',
  },
};
```

## Serviço de API

Foi criado o serviço:

```txt
src/app/services/campanhas-api.service.ts
```

Ele possui o método:

```ts
getAll()
```

Esse método faz uma requisição GET para:

```txt
http://localhost:3000/campanhas
```

## Estados exibidos na tela

A tela `/campanhas` agora controla quatro estados:

### Carregando

Exibido enquanto a requisição está sendo executada.

### Erro

Exibido quando a API não está rodando ou quando ocorre falha na requisição.

### Vazio

Exibido quando a API responde corretamente, mas retorna uma lista vazia.

### Sucesso

Exibido quando a API retorna campanhas cadastradas.

## API mockada

Foi criado o arquivo `db.json` para simular a API REST com JSON Server.

Para iniciar a API:

```bash
npm run api
```

Para iniciar o Angular:

```bash
npm start
```

## Observação

A Aula 10 pediu apenas a base da integração com API REST e a implementação do método `getAll()`.
Por isso, a listagem de campanhas já busca dados da API, mas o formulário de cadastro e edição da Aula 9 continua com a estrutura local anterior.
