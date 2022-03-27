class EditWorkflowPage
{

selectworkflowtoedit()
{
    cy.get('th.border-r-2').contains('th','Project#001').should('be.visible')

    cy.get('tbody tr:nth-child(2)')
    cy.get('svg.schedule-button.m-r-10').eq(0).click()
   
    //Edit workflow short description
    cy.get('#formGridShortDesc > .form-control').clear().type('an apparatus using mechanical power and having several parts')
    //Edit long Description
    cy.get('#formGridLongDesc > .form-control').clear().type('A machine is any physical system with ordered structural and functional properties. It may represent human-made or naturally occurring device molecular machine that uses power to apply forces and control movement to perform an action.')
    //Edit Tool Description
    cy.get('#formGridTools > .form-control').clear().type('A tool is any instrument or simple piece of equipment that you hold in your hands and use to do a particular kind of work. For example, spades, hammers, and knives are all tools. I find the best tool for the purpose is a pair of shears. Synonyms: implement, device, appliance, apparatus More Synonyms of tool.')
   // click on update 
    cy.get(':nth-child(8) > .col > .btn').contains('Update').click()
}


SelectWorkflow_Schedule()
{
    cy.get('th.border-r-2').contains('th','Project#001').should('be.visible')
    cy.get('tbody tr:nth-child(2)')
    // workflow overview -> click on schedule workflow calender icon
    cy.get('svg.schedule-button.m-r-10').eq(1).click()
    cy.wait(2000)
    //workflow overview -> schedule workflow calender -> click on schedule button
    cy.get('button.btn.btn-primary.global-btn-class').click()
    
}



DeleteWorkflow()
{
    cy.get('th.border-r-2').contains('th','Project#001').should('be.visible')
    cy.get('tbody tr:nth-child(2)')   

    // workflow overview -> click on schedule workflow calender icon
    cy.get('.schedule-button').eq(2).click()
    cy.wait(2000)
    
}

}
export default EditWorkflowPage