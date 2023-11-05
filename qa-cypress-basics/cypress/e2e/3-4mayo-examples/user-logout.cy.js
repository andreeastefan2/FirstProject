/// <reference types="cypress" />

describe("QA Practice login", () => {

    beforeEach(() => {
        cy.visit("https://qa-practice.netlify.app");
    });
    
    it("login", () => {
      cy.get("a").contains("Forms").click();
      cy.get("#login").click();
      cy.get("#email").type("admin@admin.com");
      cy.get("#password").type("admin123");
      cy.get("button").contains("Submit").click();
      cy.get("#logout").click();
      cy.get('h2').contains('Login - Shop').should("be.visible");
    });
  });
  