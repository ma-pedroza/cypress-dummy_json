# Registro de Defeito

**1. Título:** Delete falso

**Passos de reprodução:**

- Poder realizar uma Request
- Dar **`DELETE /products/51`**

***Resultado esperado:*** Produto com Id 51 seja informado no body e deletado permanentemente da API, não aparecendo novamente caso realiza a request `GET /products/51`

**Resultado obtido:** Body da request vem com o produto com um campo isDeleted: true, porém não há uma exclusão concreta do produto da API, caso realize a request  `GET /products/51` o produto continua aparecendo na API.

**`Severidade: Alta`**

**`Prioridade: Alta`**