describe("Funcionalidade: Produto", () => {
    it("Dado que quero listar Produtos com um limite de 5, Quando der GET /products?limit=5, Então retorna um array com 5 elementos contendo id, title, price", () => {
        cy.request("GET", "https://dummyjson.com/products?limit=5").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.products).to.be.an("array");
            expect(response.body.products.length).to.eq(5);
            expect(response.body.products[0]).to.have.any.keys("id", "title", "price");

            // Esta request possui um status code correto, retorna os dados esperados.
        })
    })

    it("Dado que quero DELETAR um Produto, Quando der DELETE /products/51, Então retorna 200 e uma resposta plausivel", () => {
        cy.request("DELETE", "https://dummyjson.com/products/51").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).property("deletedOn");
            expect(response.body.isDeleted).to.eq(true);

            // Essa request não deleta de fato o produto, e sua resposta não é muito plausível para exclusão.
        })
    })

    it("Dado que quero DELETAR um Produto inexistente, Quando der DELETE /products/944, Então retorna 404 e uma mensagem de ERRO", () => {
        cy.request({method: "DELETE", url: "https://dummyjson.com/products/944", failOnStatusCode: false}).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).property("message");
        })
    })
})