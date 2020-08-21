/// <reference types="Cypress" />
describe("Test Suite",function(){
    it("Fake Test",function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()
        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response: { error: "Hey comment does not exits!" }
          }).as('updatecomment')
          cy.get('.network-put').click()
          cy.get('.network-put').should('contain','Hey comment does not exits!')
    })
})