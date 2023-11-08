/// <reference types="cypress" />

describe("QA Practice login", () => {
    it("login", () => {
      cy.visit("https://qa-practice.netlify.app");
      cy.get("#file-upload-item").click();
      cy.get("#file_upload").selectFile("cypress/fixtures/fisier.txt");
      cy.get("button").contains("Submit").click();
      cy.contains('You have successfully uploaded "fisier.txt"'); 
    })
  });
  