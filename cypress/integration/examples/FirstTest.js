/// <reference types="Cypress" />
describe("My first test Suite", function () {
    it("My first test Case", function () {
        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')   
        cy.wait(3000)     
        //in selenium get is used to hit the browser and in cypress it is used to findElement
        cy.get('.product:visible').should('have.length',4)
        // we will generalize the code by saving ".products" into a variable & also do alliasing by using .as()
        cy.get('.products').as('productlocator')
        //parent-child chaining and finding 4 products using ".find"
        cy.get('@productlocator').find('.product').should('have.length',4)
        // now moving to the 2nd product with the help of eq
        cy.get('@productlocator').find('.product').should('have.length',4).eq(2).contains('ADD TO CART').click().then(function(){
            //console.log("hello!!")// this will execute asynchronously because it is not a cypress command so inoder to make 
        //it synchronous we need to handle the promise of the above stmt using then 
        })
        
        // applying logic to add item to cart
        cy.get('@productlocator').find('.product').each(($el, index, $list)=>{
            const veggy=$el.find('h4.product-name').text()
            if(veggy.includes('Cashews'))
            {
              $el.find('button').click()
            }
        })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoelement){  //text is a jquery method so we need to the handle the promise first 
            cy.log(logoelement.text())                //and store the element in the function then perform actions.
        })

        

    })
})