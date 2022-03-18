/// <reference types="Cypress" />

class CreateNewWorkflowPage
{
visit()
{
    //Visit to pitstop ste
    //cy.visit("http://18.197.185.177/workflow")
    //cy.visit("http://localhost:3000/workflow")
    cy.visit("http://18.197.185.177:4000/")
    cy.get('.pitstop_name.bg-white').contains('Pitstop').should('be.visible')
}

workflowoverview()
{
cy.get('.nav-link').eq(2).click()
cy.get('div#component_name_create_new_workflow').contains('Workflow Overview').should('be.visible')
}

CreateNewWorkflow()
{
    //click on createnew workflow button
    cy.get("div.add-btn").click()
    cy.get('div#component_name_create_new_workflow').contains('Create New Workflow').should('be.visible')
    
} 
FillWorkflowinfo()
{
    // Fill new work flow all inputs
    //cy.get('#flowName > .form-control').type(this.data.FlowName)
    cy.get('#flowName > .form-control').type('Project#001')
    cy.get(':nth-child(3) > #category > .form-select').select('Operations').should('have.value', 'Operations')
    cy.get('#tags > .form-control').type('Tags')
    cy.get('#assets > .form-select').select('Dosing').should('have.value','Dosing')
    cy.get('#teamMembers > .form-control').clear().type('2')
    cy.get('#formGridShortDesc > .form-control').type('Flow short description')
    cy.get('#formGridLongDesc > .form-control').type('Flow long description')
    cy.get('#formGridTools > .form-control').type('Tool Description')
}
clickcreateworkflow()
{
    cy.get(':nth-child(8) > .col > .btn').click()
}
CreateProceesTask()
{
    cy.get('span > svg > path').click()
    cy.get('.offcanvas-title').contains('Task details').should('be.visible')
    //Task title
    cy.get(':nth-child(3) > .form-control').type('Task_01')
    //Task description
    cy.get(':nth-child(4) > .form-control').type('Task Details are updated')
    cy.get('.m-v-4 > .btn').click()
}

CreateSubTask()
{
    //click on subtask + button
    cy.get(':nth-child(3) > svg > path').click()
    cy.get('.offcanvas-title').contains('Subtask details').should('be.visible')
    //Title of sub task
    cy.get(':nth-child(3) > .form-control').type('subtask-01')
    //subbtask description
    cy.get(':nth-child(4) > .form-control').type('sub task details need to update')
    //Duration for the sub task
    cy.get('.task-detail-container > :nth-child(5) > .form-control').clear().type('5')

    }

SubTaskConfirmby_Checkbox()
{
    //sub task confirm by
    cy.get('.task-detail-container > #category > .form-select').select('CHECK_BOX').should('have.value','CHECK_BOX')
}

SubTaskConfirmby_Snapshot()
{
    //sub task confirm by
    cy.get('.task-detail-container > #category > .form-select').select('SNAP_SHOT').should('have.value','SNAP_SHOT')
}

SubTaskConfirmby_None()
{
    cy.get('.task-detail-container > #category > .form-select').select('NONE').should('have.value','NONE')
}
Savesubtask()
{
   //save sub task
   cy.get('.m-v-4 > .btn').click()
}
Finish_Workflow_Creation()
{
    cy.get(':nth-child(10) > .col > .btn').click()
}


}

export default CreateNewWorkflowPage