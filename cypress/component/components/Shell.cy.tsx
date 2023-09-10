import React from "react";
import Shell from "../../../src/app/components/Shell";

describe("<Shell />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Shell page="projects">
        <h1>Test</h1>
      </Shell>
    );
  });
  it("should show the children", () => {
    cy.mount(
      <Shell page="projects">
        <h1>Test</h1>
      </Shell>
    );
    cy.contains("Test");
  });
  it("should highlight the projects link when on projects page", () => {
    cy.mount(
      <Shell page="projects">
        <h1>Test</h1>
      </Shell>
    );
    cy.get("[cy-data=sidebar-link-projects]").should(
      "have.class",
      "bg-gray-800"
    );
    cy.get("[cy-data=sidebar-link-users]").should(
      "not.have.class",
      "bg-gray-800"
    );
  });
  it("should highlight the users link when on users page", () => {
    cy.mount(
      <Shell page="users">
        <h1>Test</h1>
      </Shell>
    );
    cy.get("[cy-data=sidebar-link-users]").should("have.class", "bg-gray-800");
    cy.get("[cy-data=sidebar-link-projects]").should(
      "not.have.class",
      "bg-gray-800"
    );
  });
  describe("mobile", () => {
    beforeEach(() => {
      cy.mount(
        <Shell page="users">
          <h1>Test</h1>
        </Shell>
      );
    });
    it("should open a side menu when the sidebar open is clicked", () => {
      cy.get("[cy-data=sidebar-open]").click();
      cy.get("[cy-data=sidebar]").should("exist");
    });
    it("should hide the side menu when the sidebar when close button is clicked", () => {
      cy.get("[cy-data=sidebar-open]").click();
      cy.get("[cy-data=sidebar-close]").click();
      cy.get("[cy-data=sidebar]").should("not.exist");
    });
  });
});
