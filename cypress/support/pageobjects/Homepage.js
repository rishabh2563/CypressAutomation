class HomePage{

getname()
{
    return cy.get('div[class="form-group"] input[name="name"]')
}
getemail()
{
    return cy.get('div[class="form-group"] input[name="email"]')
}
getpassword()
{
   return cy.get('#exampleInputPassword1')
}
getcheckbox()
{
    return cy.get('#exampleCheck1')
}
getgender()
{
    return cy.get('select')
}
getentrepreneur(){
 return cy.get('#inlineRadio3')
}
getradio(){
    return cy.get('#inlineRadio1')
}
getsubmitbtn(){
    return cy.get('input[value="Submit"]')
}
gettwowaybinding(){
    return cy.get('.ng-pristine')
}
getshopbtn(){
    return cy.get('a[href*="shop"]')
}
}
export default HomePage;