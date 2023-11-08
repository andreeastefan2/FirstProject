/// <reference types="cypress" />

describe("QA Practice login", () => {
  beforeEach(() => {
    cy.login("admin@admin.com", "admin123");

// The above function written in commands.js has replaced the above
    // cy.visit("https://qa-practice.netlify.app");
    // cy.get("a").contains("Forms").click();
    // cy.get("#login").click();
    // cy.get("#email").type("admin@admin.com");
    // cy.get("#password").type("admin123");
    // cy.get("button").contains("Submit").click();
    
  });

  it("login", () => {
    cy.get("#logout").click();
    cy.get("h2").contains("Login - Shop").should("be.visible");
  });
});
