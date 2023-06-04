class ValidatePage{
    static ResultCheckFacility(temp){
        cy.get("#facility").contains(temp)
    }
    static ResultCheckAdmissio(temp){
        cy.get("#hospital_readmission").contains(temp)
    }
    static ResultCheckProgram(temp){
        cy.get("#program").contains(temp)
    }
    static ResultCheckDate(temp){
        cy.get("#visit_date").contains(temp)
    }
    static ResultCheckComment(temp){
        cy.get("#comment").contains(temp)
    }
    
    }
export default ValidatePage;