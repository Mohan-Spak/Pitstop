/// <reference types="Cypress" />
import ScheduledWorkflowsPage from "../PageObjects/ScheduledWorkflosPage";

import CreateNewWorkflowPage from "../PageObjects/CreateNewWorkflowPage";

import EditWorkflowPage from "../PageObjects/EditWorkflowPage"

describe(' In Schedule workflow page Edit, Schedule and delete workflow and view Report', function(){

    const SchedulePage =new ScheduledWorkflowsPage()
    const workflow = new CreateNewWorkflowPage()
    const Editflow = new EditWorkflowPage()

    before(() => {
    workflow.visit()
    SchedulePage.SceduleWorkflowPage()
    })

    it.skip('Select workflow from schedule workflow page and edit', function()
    {
        SchedulePage.SelectWorkflow_scheduleWorkflow_Edit()
        cy.wait(3000)

       SchedulePage.SelectWorkflow_scheduleWorkflow_Reschedule()
       cy.wait(3000)

       SchedulePage.SelectWorkflow_scheduleWorkflow_DeleteWorkflow()
    })

    // Alert confirmation
    it.skip('Alert confirmation to delete workflow', () => {
        cy.contains('Are you sure you want to delete this scheduled workflow ?').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Are you sure you want to delete this scheduled workflow ?')
        })
        cy.on('window:confirm', () => true);
        cy.get('.btn-danger').contains('Delete').click()
    })

    it('Select workflow from schedule workflow click on completed workflow & verify Report', function()
    {
        SchedulePage.SelectWorkflow_scheduleWorkflow_verifyReport()

    })
    
    


})