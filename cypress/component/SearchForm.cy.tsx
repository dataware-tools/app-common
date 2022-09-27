import React from "react";
import { EnableSearchHistory } from "../../src/components/SearchForm.stories";
describe("experiment", () => {
  it("PageWrapper", () => {
    cy.mount(<EnableSearchHistory />);
    cy.get("input")
      .clear()
      .type("search{enter}")
      .should("contain.value", "search");
    cy.screenshot("no history");
    cy.get("input").clear().type("history{enter}");
    cy.screenshot("some history");
    cy.get("input").clear().type("sear");
  });
});
