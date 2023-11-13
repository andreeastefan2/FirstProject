class LeftSideMenuPage {
  getForms() {
    return cy.get("a").contains("Forms");
  }

  getFormsLogin() {
    return cy.get("a#login");
  }

  getInterceptAPIrequest(){
    return cy.get("#intercept-api");
  }

}

export default new LeftSideMenuPage();
