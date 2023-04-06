import React from "react";
import Main from "./main";

describe("<Main />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />);
  });

  it("renders with correct content", () => {
    cy.mount(<Main />);
    cy.contains("QuizIt.").should("exist");
    cy.contains(
      "Get random quiz questions by pressing the dice button."
    ).should("exist");
  });
});
