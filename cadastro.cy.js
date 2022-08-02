/// <reference types="cypress"/> 

context('Teste_site_compras',() =>{
    it("Realizar cadastro", () =>{
        cy.visit('https://cliente.americanas.com.br/minha-conta/cadastro?next=https://www.americanas.com.br/')

        var dados = {
            nome:'João da Silva',
            dataNascimento:'01/01/1994',
            cpf:'142.032.750-08',
            telefone:'64999999999',
            email:'joao@gmail.com',
            senha:'j@123456'
        }
        cy.get('[data-cy=formField__name]')
            .type(dados.nome)

        cy.get('[data-cy=labelFor__M]')
            .click()

        cy.get('[data-cy=formField__birthDate]')
        .type(dados.dataNascimento)

        cy.get('[data-cy=formField__cpf]')
            .type(dados.cpf)

        cy.get('[data-cy=formField__phone]')
            .type(dados.telefone)

        cy.get('[data-cy=formField__email]')
            .type(dados.email)

        cy.get('[data-cy=formField__promotionalEmails]')
            .click()

        cy.get('[data-cy=formField__password]')
            .type(dados.senha)

        cy.get('[data-cy=formField__dataSharingThirdParty]')
            .click()

        cy.get('[data-cy=sign-submit]')
            .click()
            
        // Vai ser implementado..
        //cy.get('form.sc-dSfclH gXLzpE').should('have.class', 'o email fornecido é inválido.')


    })
})
