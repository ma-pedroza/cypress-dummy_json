describe("Funcionalidade: Comentário", () => {
    it("Dado que quero ADICIONAR um Comentário válido, Quando der POST /posts/add com o Body válido, Então retorna 201 com o comentário", () => {
        const title = "Título";
        const userId = 33;
        const body = "Este é o meu comentário";
        
        cy.request({method: "POST", url: "https://dummyjson.com/posts/add", body: {
            "title": title,
            "userId": userId,
            "body": body,
        }}).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).any.keys("title", "useId", "body");
            expect(response.body).to.include({
                title: title,
                userId: userId,
                body: body,
            })
        })
    })


    it("Dado que quero ADICIONAR um Comentário INVÁLIDO, Quando der POST /posts/add com o Body INVÁLIDO, Então retorna 400 com uma mensagem de ERRO", () => {
        const title = "Título";
        const userId = "Não tem";
        
        cy.request({method: "POST", url: "https://dummyjson.com/posts/add", body: {
            "title": title,
            "userId": userId,
        }, failOnStatusCode: false}).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).property("message");    
            cy.log(response);  

        })
    })

    it("Dado que quero Atualizar um Comentário, Quando der PUT /posts/33 com o Body VÁLIDO, Então retorna 200 com atualização correta", () => {
        const title = "Testes Automatizados com Cypress são muito bons";

        cy.request({method: "PUT", url: "https://dummyjson.com/posts/33", body: {
            "title": title,
        }}).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.deep.eq(title);
        })
    })

    it("Dado que quero Atualizar um Comentário com dados INVÁLIDOS, Quando der PUT /posts/33 com o Body INVÁLIDOS, Então retorna 400 com mensagem de ERRO", () => {
       cy.request({method: "PUT", url: "https://dummyjson.com/posts/33", body: {
            "userId": "NÃO",
        }}).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).property("message");

            // A api não demonstrou um comportamento correto, não é lógico uma string poder ser atualizada como um Id
        })
    })
})