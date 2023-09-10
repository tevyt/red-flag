import React from "react";
import ErrorMessageModal from "../../../../src/app/projects/components/ErrorMessageModal";

describe("<ErrorMessageModal />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ErrorMessageModal
        open={true}
        onClose={() => null}
        message="Test"
        details="Test Details"
        closeText="Close"
      />
    );
  });
  describe("when open", () => {
    let onClose: any;
    beforeEach(() => {
      onClose = cy.stub();
      cy.mount(
        <ErrorMessageModal
          open={true}
          onClose={onClose}
          message="Test"
          details="Test Details"
          closeText="Close"
        />
      );
    });
    it("shows the message", () => {
      cy.contains("Test");
    });
    it("shows the details", () => {
      cy.contains("Test Details");
    });
    it("triggers onClose when close button is clicked", () => {
      cy.get("[data-cy=close-button]").then((el) => {
        el.trigger("click");
        expect(onClose).to.be.called;
      });
    });
  });
});
