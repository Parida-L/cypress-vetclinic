describe("Search by Owner", () => {
  it("Searches for an owner and verifies the results", () => {
    // Visite la page d'accueil de l'application
    cy.visit("/");

    // Clique sur l'icône de recherche pour accéder à la page "Find Owners"
    cy.get(".fa-search").click();

    // Vérifie que le titre de la page est "Find Owners"
    cy.get("h2").should("have.text", "Find Owners");

    // Vérifie la présence du bouton "Add Owner" et son lien
    cy.get("a.btn")
      .should("contain.text", "Add Owner")
      .and("have.attr", "href")
      .and("include", "/owners/new");

    // Vérifie la présence du champ de saisie pour le nom de famille et entre "Davis"
    cy.get("#lastName .form-control").should("exist").type("Davis");

    // Vérifie la présence du bouton "Find Owner" et clique dessus
    cy.get('[type="submit"]')
      .should("exist")
      .and("contain.text", "Find Owner")
      .click();

    // Vérifie que la section des propriétaires contient le texte "Owners"
    cy.get("#owners").should("contain.text", "Owners");

    // Vérifie que le tableau des propriétaires est présent
    cy.get("table").should("exist");
  });
});
