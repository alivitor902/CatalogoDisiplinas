# Aula 8 - Página campanha-form

Nesta aula foi criada a página `campanha-form` para demonstrar o uso de formulário reativo com validações.

## Rota criada

```txt
/campanha-form
```

## Campos do formulário

- `titulo`
- `descricao`
- `dataLimite`
- `ativa`

## Validações implementadas

- Campo obrigatório para título.
- Tamanho mínimo de 3 caracteres para título.
- Campo obrigatório para descrição.
- Tamanho mínimo de 10 caracteres para descrição.
- Campo obrigatório para data limite.
- Checkbox `ativa` obrigatório usando `Validators.requiredTrue`.

## Requisitos atendidos

- Página criada em rota separada.
- Uso de `ReactiveFormsModule`.
- Mensagens de erro usando `@if`.
- Botão de salvar desabilitado quando o formulário está inválido.
- Mensagem de sucesso ao salvar.
