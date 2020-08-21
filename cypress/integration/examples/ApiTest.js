describe("TestSuite",function(){
    it("ApiTest",function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php', {

            "name":"Learn Appium Automation with Java",
            "isbn":"bcdsdhfds",
            "aisle":"22762",
            "author":"John foe"
            }
             ).then((response)=>{
                expect(response.body).to.have.property("Msg", "successfully added")
                expect(response.status).to.equal(200)
            })
    })
})
