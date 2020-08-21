/// <reference types="Cypress" />
describe("Test Suite",function(){
    it("WebTable Test Case",function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
           const text= $el.text()
           if(text.includes('Python')){
               cy.get('tr td:nth-child(2)').eq(7).next().then((price)=>{
                  const pricetext = price.text()
                  expect(pricetext).to.equal('25')
               })
           }
        })

    })
})

//next() is a cypress method which is used to traverse between the siblings.
