class ScheduledWorkflowsPage
{

    SceduleWorkflowPage()
    {
        cy.get('.nav-link').eq(3).click()
        cy.get('div#component_name_create_new_workflow').contains('Scheduled Workflows').should('be.visible')
    }
    SelectWorkflow_scheduleWorkflow_Edit()
    {
            cy.get('tr.row-in-focus').contains('tr','Project#001').within(() =>{
            cy.get('td').eq(0)
            //Schedule workflow -> click on edit icon button
            cy.get('.schedule-button').eq(0).click()
            cy.wait(2000)
            })

             //Edit workflow short description
            cy.get('#formGridShortDesc > .form-control').clear().type('an apparatus using mechanical power and having several parts Updates')
            //Edit long Description
            cy.get('#formGridLongDesc > .form-control').clear().type('A machine is any physical system with ordered structural and functional properties. It may represent human-made or naturally occurring device molecular machine that uses power to apply forces and control movement to perform an action updated.')
            //Edit Tool Description
            cy.get('#formGridTools > .form-control').clear().type('A tool is any instrument or simple piece of equipment that you hold in your hands and use to do a particular kind of work. For example, spades, hammers, and knives are all tools. I find the best tool for the purpose is a pair of shears. Synonyms: implement, device, appliance, apparatus More Synonyms of tool updates.')
            // click on update 
            cy.get('button[type=submit]').contains('Update').click()
    }

    SelectWorkflow_scheduleWorkflow_Reschedule()
    {
        // Schedule workflow page -> select table all table row contain workflow name
        cy.get('tr.row-in-focus').contains('tr','Project#001').within(() =>{
        //Schedule workflow workflow -> first column contain project name
        cy.get('td').eq(0)
        // Schedule workflow  -> click on schedule workflow calender icon
        cy.get('.schedule-button').eq(1).click()
        cy.wait(2000)
        })
        //Schedule workflow -> schedule workflow calender -> click on schedule button
        cy.get('.m-v-4 > .btn').click()
    }

    SelectWorkflow_scheduleWorkflow_DeleteWorkflow()
    {
         // Schedule workflow -> select table all table row contain workflow name
        cy.get('tr.row-in-focus').contains('tr','Project#001').within(() =>{
        //Schedule workflow -> first column contain project name
        cy.get('td').eq(0)
        // Schedule workflow -> click on schedule workflow calender icon
        cy.get('.schedule-button').eq(2).click()
        cy.wait(2000)
        })
    }

    SelectWorkflow_scheduleWorkflow_verifyReport()
    {
        
   // Schedule workflow -> select table all table row contain workflow name
    cy.get('tr.row-in-focus').contains('tr','Completed').within(() =>{
    //Schedule workflow -> third column contain status completed
    cy.get('td').eq(3)
    // Schedule workflow -> click on Report icon
    cy.get('.schedule-button').eq(0).click()
    cy.wait(2000)
    })

    }
}
export default ScheduledWorkflowsPage