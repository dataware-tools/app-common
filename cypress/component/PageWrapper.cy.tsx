import React from "react";
import { PageWrapper } from "../../src/components/page/PageWrapper";
describe("experiment", () => {
  it("PageWrapper", () => {
    cy.mount(
      <PageWrapper repository="test">
        <span>test</span>
      </PageWrapper>
    );
    cy.screenshot("logout");
    cy.contains("Login").click();
  });
});
