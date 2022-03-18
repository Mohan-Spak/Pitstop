class EditWorkflowPage
{

selectworkflowtoedit()
{
    cy.get('tr.row-in-focus').contains('tr','Project#001').within(() =>{
    cy.get('td').eq(0)
    //workflow overview -> click on edit icon button
    cy.get('.schedule-button').eq(0).click()
    cy.wait(2000)
    })
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
    // workflow overview-> select table all table row contain workflow name
    cy.get('tr.row-in-focus').contains('tr','Project#001').within(() =>{
    //workflow overview -> first column contain project name
    cy.get('td').eq(0)
    // workflow overview -> click on schedule workflow calender icon
    cy.get('.schedule-button').eq(1).click()
    cy.wait(2000)
    })
    //workflow overview -> schedule workflow calender -> click on schedule button
    cy.get('button.btn.btn-primary.global-btn-class').click()
    
}



DeleteWorkflow()
{
    // workflow overview-> select table all table row contain workflow name
    cy.get('tr.row-in-focus').contains('tr','Project#001').within(() =>{
    //workflow overview -> first column contain project name
    cy.get('td').eq(0)
    // workflow overview -> click on schedule workflow calender icon
    cy.get('.schedule-button').eq(2).click()
    cy.wait(2000)
    })
}

}
export default EditWorkflowPage