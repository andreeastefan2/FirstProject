/// <reference types="cypress"/>

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";
import HeaderPage from "../pages/HeaderPage";

describe("Authentication test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("login test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getFormsLogin().click();
    LoginPage.getEmail().type("admin@admin.com");
    LoginPage.getPsw().type("admin123");
    LoginPage.getLoginBtn().click();
    HeaderPage.getLogOutBtn().should("be.visible");
  });
});
