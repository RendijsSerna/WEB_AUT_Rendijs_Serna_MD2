class AdmissionPage{

    static FirstSelect(){
        cy.get("#combo_facility")
            .select('Seoul CURA Healthcare Center')
    }
    static ClickComboBox(){
        cy.get("#chk_hospotal_readmission").click()
        
    }
   
    static SelectMedicAid(){
        cy.get("#radio_program_medicaid").click()
    }
    static SelectDate(){
        cy.get("span.glyphicon-calendar").click()
        cy.get("td.day").contains("30").click()
       
    }
    static TypeComments(temp){
        cy.contains("Comment").click()
        cy.get("#txt_comment").type(temp)
    }
    static ClickButton(){
        cy.get("#btn-book-appointment").click()
        
    }
    static MenuBar(){
        cy.get("#menu-toggle").click()
    }

    static MenuBarValidate(){
        cy.get("#sidebar-wrapper").should("have.class","active")
    }
    static MenuBarHistory(){
        cy.contains("History").click()
    }
    static FileCheck2(){
        cy.contains("No appointment.")
    }
}
    export default AdmissionPage;