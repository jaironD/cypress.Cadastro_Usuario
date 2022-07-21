/// <reference types="cypress" /> 

context('Teste_site_compras',() =>{
    it("Realizar cadastro", () =>{
        cy.visit('https://cliente.americanas.com.br/minha-conta/cadastro?next=https://www.americanas.com.br/')

        cy.get('[data-cy=formField__name]')
            .type('João da Silva')

        cy.get('[data-cy=labelFor__M]')
            .click()

        cy.get('[data-cy=formField__birthDate]')
            .type('01/04/2022')

        cy.get('[data-cy=formField__cpf]')
            .type('142.032.750-08')

        cy.get('[data-cy=formField__phone]')
            .type('(61) 92833-4384')

        cy.get('[data-cy=formField__email]')
            .type('danilo-porto94@attglobal.net')

        cy.get('[data-cy=formField__promotionalEmails]')
            .click()

        cy.get('[data-cy=formField__password]')
            .type('J@123456')

        cy.get('[data-cy=formField__dataSharingThirdParty]')
            .click()

        cy.get('[data-cy=sign-submit]')
            .click()
    })
})
