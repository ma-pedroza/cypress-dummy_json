# Registro de Defeito

**1. Título:** Delete falso

**Passos de reprodução:**

- Poder realizar uma Request
- Dar **`DELETE /products/51`**

**Resultado esperado:** Produto com Id 51 seja informado no body e deletado permanentemente da API, não aparecendo novamente caso realiza a request `GET /products/51`

**Resultado obtido:** Body da request vem com o produto com um campo isDeleted: true, porém não há uma exclusão concreta do produto da API, caso realize a request  `GET /products/51` o produto continua aparecendo na API.

**`Severidade: Alta`**

**`Prioridade: Alta`**

**2. Título:** Atualização sem validação

**Passos de reprodução:**

- Poder realizar uma Request
- Dar **`PUT /posts/33`**
- Body da requisição com campo **`userId: "NÃO`**

**Resultado esperado:** Ao dar `PUT /posts/33` com o body inválido, o esperado é o um status code 400 e uma mensagem de erro como "userId não pode ser diferente de um número inteiro".

**Resultado obtido:** Ao dar `PUT /posts/33` com o body inválido, a API retorna o Objeto atualizado e permite que o campo userId seja atualizado como uma String, sem tratativa e mensagem de erro.

**`Severidade: Alta`**

**`Prioridade: Alta`**