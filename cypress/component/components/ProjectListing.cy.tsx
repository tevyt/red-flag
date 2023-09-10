import React from "react";
import ProjectListing from "../../../src/app/projects/components/ProjectListing";

describe("<ProjectListing />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProjectListing projects={[]} />);
  });
  it("should show the no projects prompt when there are no projects", () => {
    cy.mount(<ProjectListing projects={[]} />);
    cy.contains("No projects");
  });
  it("should show a list of the projects", () => {
    cy.mount(
      <ProjectListing
        projects={[
          {
            id: 1,
            name: "Test",
            description: "Test Description",
            logo: "https://via.placeholder.com/150",
            status: "active",
          },
          {
            id: 2,
            name: "Test 2",
            description: "Test Description 2",
            logo: "https://via.placeholder.com/150",
            status: "active",
          },
        ]}
      />
    );
    cy.get("[cy-data=project-1]").should("exist");
    cy.get("[cy-data=project-2]").should("exist");
  });
});
