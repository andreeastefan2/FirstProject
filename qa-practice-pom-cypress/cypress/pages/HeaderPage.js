class HeaderPage {
    getLogOutBtn() {
      return cy.get("#logout");
    }
  }
  
  export default new HeaderPage();
  