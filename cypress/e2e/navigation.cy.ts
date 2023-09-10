describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should redirect to the projects page by default", () => {
    cy.url().should("include", "/projects");
  });

  describe("desktop", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });
    it("should navigate to the projects page", () => {
      cy.get("a[href='/projects']").click();
      cy.url().should("include", "/projects");
    });
    it("should navigate to the users page", () => {
      cy.get("a[href='/users']").click();
      cy.url().should("include", "/users");
    });
    it("contain a link to the source on Github", () => {
      cy.get("a[href='https://github.com/tevyt/red-flag']").should("exist");
    });
  });

  describe("mobile", () => {
    beforeEach(() => {
      cy.viewport("iphone-6");
    });
    it("should open the sidebar", () => {
      cy.get("button[cy-data='sidebar-open']").click();
      cy.get("div[cy-data='sidebar']").should("exist");
      cy.get("button[cy-data='sidebar-close']").click();
      cy.get("div[cy-data='sidebar']").should("not.exist");
    });

    it("should navigate to the projects page", () => {
      cy.get("button[cy-data='sidebar-open']").click();
      cy.get("a[href='/projects']").last().click();
      cy.url().should("include", "/projects");
    });
    it("should navigate to the users page", () => {
      cy.get("button[cy-data='sidebar-open']").click();
      cy.get("a[href='/users']").last().click();
      cy.url().should("include", "/users");
    });
  });
});
