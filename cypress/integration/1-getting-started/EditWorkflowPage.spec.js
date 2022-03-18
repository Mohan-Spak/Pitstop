/// <reference types="Cypress" />
import EditWorkflowPage from "../PageObjects/EditWorkflowPage"

import CreateNewWorkflowPage from "../PageObjects/CreateNewWorkflowPage";

describe ('Test Suite Edit, Schedule and Delete workflow form workflow overview', function(){
    const Editflow = new EditWorkflowPage()
    const workflow = new CreateNewWorkflowPage()

    before(() => {
    workflow.visit()
    workflow.workflowoverview()
    })

    it('Select workflow from list & Edit' , function()
    { 
        Editflow.selectworkflowtoedit()
        workflow.Finish_Workflow_Creation()
        cy.wait(6000)   
    })

    it('Select workflow from list & Schedule' , function()
    {
        Editflow.SelectWorkflow_Schedule()
        cy.wait(6000)
    })

    // Workflow overview -> Delete selected workflow
    it('Select workflow from list & Delete' , function()
    {
        Editflow.DeleteWorkflow()
    
    })
    // Alert confirmation
    it('Alert confirmation to delete workflow', () => {
        cy.contains('Are you sure you want to delete this workflow ?').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`Are you sure you want to delete this workflow ?`)
        })
        cy.on('window:confirm', () => true);
        cy.get('.btn-danger').contains('Delete').click()
    })

})