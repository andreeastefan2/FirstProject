class LoginPage {
  getEmail() {
    return cy.get("#email");
  }

  getPsw() {
    return cy.get("#password");
  }

  getLoginBtn() {
    return cy.get("button").contains("Submit");
  }
}

export default new LoginPage();
