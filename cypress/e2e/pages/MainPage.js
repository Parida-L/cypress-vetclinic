class MainPage {
  visit() {
    cy.visit("/");
  }

  verifyPageElements() {
    cy.get(".img-responsive").should("have.attr", "src").and("contain", ".png");
    cy.get("h2").should("contain", "Welcome");
  }

  navigateToFindOwners() {
    cy.get(".fa-search").click();
    cy.get("h2").should("have.text", "Find Owners");
  }

  navigateToVeterinarians() {
    cy.get(".fa-th-list").click();
    cy.get("h2").should("have.text", "Veterinarians");
  }
}

export default new MainPage();
