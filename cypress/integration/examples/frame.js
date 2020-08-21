/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe("Test Suite",function(){
    it("FrameHandlind Test case",function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        
    })
})