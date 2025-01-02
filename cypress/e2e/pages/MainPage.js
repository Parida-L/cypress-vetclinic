class MainPage {
  visit() {
    cy.visit("/");
  }

  verifyUrl(){
    cy.url().should(
      "eq",
      "https://spring-framework-petclinic-qctjpkmzuq-od.a.run.app/"
    );
  }

  verifyNavbar(){
    cy.get(".navbar").should("exist");
    cy.get(".navbar a").should("have.length.at.least", 4).and("be.visible");
    cy.get(".navbar a").contains("Home").click();
  }

  verifyPageElements() {
    cy.get(".img-responsive").should("have.attr", "src").and("contain", ".png");
    cy.get("h2").should("contain", "Welcome");
    cy.get(".fa-home").should("exist");
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
