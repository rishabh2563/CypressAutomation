/// <reference types="Cypress" />
describe("Test Suite",function(){
    it("Child Window Test Case",function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').then((el) =>{
            const url=el.prop('href')
            cy.visit(url)
        })
    })
})
// In cypress we can not switch to new child window with new domain.The Domaion must be similar to the priamry URL.