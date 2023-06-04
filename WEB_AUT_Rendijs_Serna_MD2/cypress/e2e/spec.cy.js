import LoginPage from "../pageObjects/login.page";
import AdmissionPage from "../pageObjects/Admission.page";
import ValidatePage from "../pageObjects/validate.page";

describe('Test1', () => {
  it('passes', () => {
    cy.visit(' https://katalon-demo-cura.herokuapp.com')
   
    cy.contains("Make Appointment").click()
    LoginPage.UsernameLogIn("John Doe")
    LoginPage.PasswordLogIn("ThisIsNotAPassword")
    LoginPage.ButtonClickLogIn()
  
    AdmissionPage.FirstSelect()
    AdmissionPage.ClickComboBox()
    AdmissionPage.SelectMedicAid()
    AdmissionPage.SelectDate()
    AdmissionPage.TypeComments("CURA Healthcare Service")
    AdmissionPage.ClickButton()

    ValidatePage.ResultCheckFacility('Seoul CURA Healthcare Center')
    ValidatePage.ResultCheckAdmissio('Yes')
    ValidatePage.ResultCheckProgram('Medicaid')
    ValidatePage.ResultCheckDate('30/05/2023')
    ValidatePage.ResultCheckComment('CURA Healthcare Service')
    


    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
      });
  })
    })
  describe('Test2', () => {
    it('passes', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com')
     
      cy.contains("Make Appointment").click()
      LoginPage.UsernameLogIn("John Doe")
      LoginPage.PasswordLogIn("ThisIsNotAPassword")
      LoginPage.ButtonClickLogIn()
    
     AdmissionPage.MenuBar()
     AdmissionPage.MenuBarValidate()
     AdmissionPage.MenuBarHistory()
     AdmissionPage.FileCheck2()
  
  
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
        });
    })
  })
