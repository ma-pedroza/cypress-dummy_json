# RELATÓRIO DE TESTES DE API - DummyJSON

## Integrantes
- Matheus Gomes Pedroza | RA 1998912

## Falhas e Inconsistências 

Encontrei dois problemas sérios de consistência na DummyJSON, principalmente no tratamento de dados e na exclusão:

| Rota / Ação | Problema | Detalhes |
| :--- | :--- | :--- |
| **`DELETE /products/51`** | **Exclusão Falsa (Soft Delete)** | A request retorna `200 OK`, mas o produto não é deletado de verdade, só marcado como deletado (`isDeleted: true`). A resposta não é clara para quem quer uma exclusão real. |
| **`PUT /posts/33`** (Atualização Inválida) | **Falta de Validação de Dados** | O teste enviou uma **string** (`"NÃO"`) para o campo `userId` e a API não rejeitou de forma clara. Ela não consegue validar que `userId` precisa ser um número, o que é um erro grave de lógica. |

**Observação:** Os `GETs` e `POSTs` básicos de Usuários e Comentários/Posts funcionam bem (retornam `200`/`201` no sucesso), assim como a busca por ID (`404` para ID inválido), o que é positivo.

Conclusão: A API é Confiável?

**Não, não é confiável.**

A DummyJSON **funciona** para testar as telas do nosso projeto (simula bem o sucesso), mas **não é tão boa na parte de erros e lógica de negócio**.

1.  **Validação Fraca:** Não validar o tipo de dado (aceitar texto onde só pode ser número) é um risco.
2.  **DELETE Enganoso:** O `DELETE` que não deleta de verdade é confuso para o front-end.

**Resumo:** É uma API básica, que falha onde uma API de produção precisa ser forte (consistência de dados e regras de negócio).
