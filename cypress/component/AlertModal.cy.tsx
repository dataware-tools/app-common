import React from "react";
import { AlertOnClick } from "../../src/components/AlertModal.stories";
describe("experiment", () => {
  it("AlertModal", () => {
    cy.mount(<AlertOnClick />);
    cy.contains("click me!").click();
    cy.screenshot("open");
    cy.contains("yes").click();
    cy.screenshot("closed");
  });
});
