/// <reference types="Cypress" />
describe("Test Suite",function(){
    it("Xpath Test",function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.xpath('//div[@class="form-group"]//input[@name="name"]').type('Rishabh')
    })
})