class Confirmationpage{
 getcountryinput()
 {
     return cy.get('#country')
 }
 getselect_country()
 {
     cy.get('.suggestions>ul>li>a').click()
     
 }
getagreementcheckbox()
{
   return cy.get('#checkbox2')
}
getpurchasebtn()
{
    return cy.get('input[value="Purchase"]')
}
}
export default Confirmationpage;