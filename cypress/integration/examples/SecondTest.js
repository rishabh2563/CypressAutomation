/// <reference types="Cypress" />
describe("My Second Testsuite", function(){
    it("First Test case",function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        //checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //1
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])//2
        //Static dropdown
        cy.get('select').select('Option1').should('have.value','option1')
        //dynamic dropdown
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item').each(($el, index, $list)=>{
           if($el.text() == 'India')
           {
               $el.click()
           }
        })
        cy.get('#autocomplete').should('have.value','India')

        //visibility and non-visibility of elements

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio buttons
        cy.get('input[value="radio1"]').check().should('be.checked')
  

       

    })
})








//1.if we are comparing then we shoulh use "have" and if we are verifying behaviuor then we should use "be" and is used for the concatenation of assertions.
//2 Selecting multiple checkboxes by passing values as a parameter.