/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe("Registration test suites", () => {
    beforeEach(() => {
        cy.visit("https://qa-practice.netlify.app/register");
    });
    
    it("Register test", () => {
      cy.get("#firstName").type.(faker.person.firstName());
      cy.get("#emailAdress").type(faker.internet.email());
      cy.get("#password").type(faker.internet.password());
      cy.get("button").contains("Register").click();
      cy.contains('The account has been successfully created!').should('be.visible');
    });
  });