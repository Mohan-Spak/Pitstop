class ScheduledWorkflowsPage
{

    SceduleWorkflowPage()
    {
        cy.get('.nav-link').eq(3).click()
        cy.get('div#component_name_create_new_workflow').contains('Scheduled Workflows').should('be.visible')
    }
    SelectWorkflow_scheduleWorkflow_Edit()
    {
    cy.get('th.border-r-2').contains('th','Project#001').should('be.visible')

     
    cy.get(':nth-child(3)>:nth-child(9)>div>.m-l-1>.schedule-button').click()
           
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
        
        cy.get(':nth-child(3) > :nth-child(9) > div > :nth-child(2) > .schedule-button').click()
         cy.wait(6000)

        //Schedule workflow -> schedule workflow calender -> click on schedule button
        cy.get('.m-v-4 > .btn').click()
    }

    SelectWorkflow_scheduleWorkflow_DeleteWorkflow()
    {
        cy.get(':nth-child(3) > :nth-child(9) > div > :nth-child(3) > .schedule-button').click()
    }

    SelectWorkflow_scheduleWorkflow_verifyReport()
    {
        
    cy.get('tbody tr').contains('Completed')
    cy.get('.schedule-button').click()

//    // Schedule workflow -> select table all table row contain workflow name
//     cy.get('tr.row-in-focus').contains('tr','Completed').within(() =>{
//     //Schedule workflow -> third column contain status completed
//     cy.get('td').eq(3)
//     // Schedule workflow -> click on Report icon
//     cy.get('.schedule-button').eq(0).click()
//     cy.wait(2000)
//     })

    }
}
export default ScheduledWorkflowsPage