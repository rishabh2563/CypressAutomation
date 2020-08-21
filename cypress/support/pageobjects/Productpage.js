class Productpage{
 getcheckoutbtn()
 {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
 }   

 verifytotal()
 {
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
       const amount=$el.text()
       var res=amount.split(" ")
       res=res[1].trim()
       sum=Number(sum)+Number(res)
   }).then(()=>{
      cy.log(sum)
   })
   cy.get('td.text-right>h3>strong').then((element)=>{
      const totaltext=element.text()
      var result=totaltext.split(" ")
      result=result[1].trim()
      expect(Number(result)).to.equal(sum)
   })
 }
 

}
export default Productpage;