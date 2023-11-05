/// <reference types="cypress" />

describe("QA Practice login", () => {
  it("login", () => {
    cy.visit("https://qa-practice.netlify.app");
    cy.get("a").contains("Forms").click();
    cy.get("#login").click();
    cy.get("#email").type("admin@admin.com");
    cy.get("#password").type("admin123");
    cy.get("button").contains("Submit").click();
    cy.get("#logout").should('be.visible');
  })
});
