class LoginPage{

static UsernameLogIn(temp){
    cy.get("#txt-username").type(temp)
}
static PasswordLogIn(temp){
    cy.get("#txt-password").type(temp)
}
static ButtonClickLogIn(){
    cy.get('#btn-login').click()
}
}
export default LoginPage;