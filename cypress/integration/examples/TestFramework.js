/// <reference types="Cypress" />
import Homepage from '../../support/pageobjects/Homepage'
import Productpage from '../../support/pageobjects/Productpage'
import Checkoutpage from '../../support/pageobjects/CheckoutPage'
import Confirmationpage from '../../support/pageobjects/Confirmationpage'
describe("Test suite",function(){
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data
        })

    })
    it("Framework Test Case",function(){
        const homepage = new Homepage()
        const productpage=new Productpage()
        const checkoutpage=new Checkoutpage()
        const confirmpage=new Confirmationpage()
        cy.visit(Cypress.env('url')+"angularpractice/")
        homepage.getname().type(this.data.name)
        homepage.getemail().type(this.data.email)
        homepage.getpassword().type(this.data.password)
        homepage.getcheckbox().click()
        homepage.getgender().select(this.data.gender)
        homepage.getradio().click()
        homepage.getsubmitbtn().click()
        cy.get('.alert').invoke('text').then((sucesstext)=>{
            expect(sucesstext).to.contain('Success!')
        })
        homepage.gettwowaybinding().should('have.value',this.data.name)
        homepage.getname().should('have.attr','minlength','2')
        homepage.getentrepreneur().should('be.disabled')
        homepage.getshopbtn().click()
        this.data.productname.forEach((element)=> {
            cy.selectproduct(element)
        })
        productpage.getcheckoutbtn().click()
        productpage.verifytotal()
        checkoutpage.getcheckoutbtn2().click()
        confirmpage.getcountryinput().type('India')  
        Cypress.config('defaultCommandTimeout',8000)
        confirmpage.getselect_country()
        confirmpage.getagreementcheckbox().click({force: true})
        confirmpage.getpurchasebtn().click()
        cy.get('.alert').then((element)=>{
            const actualtext=element.text()
            expect(actualtext.includes('Success!')).to.be.true
        })
       


    })
})