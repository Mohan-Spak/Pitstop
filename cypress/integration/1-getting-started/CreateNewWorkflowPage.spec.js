
/// <reference types="Cypress" />

import CreateNewWorkflowPage from "../PageObjects/CreateNewWorkflowPage";

describe ('Test Suite Create new Workflow', function(){
    const workflow = new CreateNewWorkflowPage()

//    before(function(){
//        cy.fixture('example').then(function(data){
//            this.data=data
//        })
//    })

   it('Aceess to Workflow Overview page' , function()
    {
      workflow.visit()
      workflow.workflowoverview()
     })
   it('Create new workflow', function(){
        workflow.CreateNewWorkflow()
        workflow.FillWorkflowinfo()
        workflow.clickcreateworkflow()
        cy.wait(6000)
        workflow.CreateProceesTask()
        cy.wait(6000)
        workflow.CreateSubTask()
        workflow.SubTaskConfirmby_Checkbox()
        workflow.Savesubtask()
        cy.wait(6000)
        workflow.CreateSubTask()
        workflow.SubTaskConfirmby_Snapshot()
        workflow.Savesubtask()
        cy.wait(6000)
        workflow.CreateSubTask()
        workflow.SubTaskConfirmby_None()
        workflow.Savesubtask()
        cy.wait(6000)
        workflow.Finish_Workflow_Creation()

    })

})