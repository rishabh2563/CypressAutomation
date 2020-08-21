/// <reference types="Cypress" />
describe("My Test Suite",function(){
    it("Mouseover Test Case",function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')//1
        cy.contains('Top').click()
        cy.url().should('include','top')
        cy.contains('Reload').click({force:true})//2
    })
})

//cypress directly doesnot supports mouse operation but it can be handled using  show method of jquert which is used
// within the invoke method of cypress
//1 this can be used for the scenario to verify that mousehover is working and click on the top is also functional
//2 We can also use force:true which will click on the invisible element on the DOM