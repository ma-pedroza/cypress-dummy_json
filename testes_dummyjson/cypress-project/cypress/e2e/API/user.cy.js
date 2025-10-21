describe("Funcionalidade: Usuario", () => {
    it("Dado que quero listar os Usuarios, Quando der GET /users, Então retorna 200 e um Array de Usuarios", () => {
        cy.request("GET", "https://dummyjson.com/users").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).property("users");
            expect(response.body.users[0]).any.keys("name", "age", "email");
        })
    })

    it("Dado que quero listar um único Usuário por seu ID, Quando der GET /users/19, Então retorna 200 e somente um Usuário com ID 19", () => {
            cy.request("GET", "https://dummyjson.com/users/19").then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an("OBJECT");
                expect(response.body.id).to.eq(19);
            })
    })

    it("Dado que quero listar um Usuário INVÁLIDO, Quando der GET /users/555, Então retorna 404 e uma mensagem de erro", () => {
            cy.request({method: "GET", url: "https://dummyjson.com/users/555", failOnStatusCode: false}).then((response) => {
               expect(response.status).to.eq(404);
               expect(response.body).property("message");
            })
    })
})