/// <reference types="Cypress" />
describe("Third Test Suite",function(){
    it('Fist Testcase',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('input[value="Confirm"]').click()
        cy.on('	window:alert',(str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str1)=>{
            expect(str1).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr','target').click() //1
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')//2
    })
})

//1 in cypress there is no terminology for child tabs so we need to remove the target element from the DOM by using 
// removeAttr which is a jquery method which is done in cypress by using invoke()
//2 go is the command to move back and forward of the url by using cy.go('back or forward')
