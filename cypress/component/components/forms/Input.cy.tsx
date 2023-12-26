import Input from "@/app/components/form/Input";
import React from "react";

describe("<Input />", () => {
  let onChangeMock: any;
  beforeEach(() => {
    onChangeMock = cy.spy().as("onChangeSpy");
    cy.mount(
      <Input
        name="test"
        label="Test"
        placeholder="The placeholder"
        onChange={onChangeMock}
      />
    );
  });
  it("renders", () => {
    cy.mount(<Input name="test" label="Test" />);
  });

  it("shows the label", () => {
    cy.contains("Test");
  });

  it("shows the placeholder", () => {
    cy.get("input").should("have.attr", "placeholder", "The placeholder");
  });

  it("calls the onChange handler when the value changes", () => {
    cy.get("input").type("test");
    cy.get("@onChangeSpy").should("have.been.called");
  });

  describe("when there is an error", () => {
    beforeEach(() => {
      cy.mount(
        <Input
          name="test"
          label="Test"
          placeholder="The placeholder"
          error="The error"
        />
      );
    });
    it("shows the error", () => {
      cy.contains("The error");
    });
  });
});
