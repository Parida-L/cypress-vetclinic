describe('Homepage Tests', () => {
  // Avant chaque test, on visite la page principale
  beforeEach(() => {
    cy.visit("/");
  });
  
  // Vérifie que l'URL est correcte
  it("Verify url", () => {
    cy.url().should(
      "eq",
      "https://spring-framework-petclinic-qctjpkmzuq-od.a.run.app/"
    );
  })

  //Vérif les éléments présents de la page d'acceuil
  it("Verify elements on the homepage", () => {
    //vérifie la présence de l'image
    cy.get(".img-responsive").should("have.attr", "src").and("contain", ".png");
    //vérifie que le titre contient le texte Welcome
    cy.get("h2").should("contain", "Welcome");
    // Vérifie la présence de l'icone Home
    cy.get(".fa-home").should("exist");
  });

  //Vérif des liens de la navbar
  it("Verify navbar links", () => {
    // Vérifie que la barre de navigation existe
    cy.get(".navbar").should("exist");
    // Vérifie que la navbar contient au moins 4 liens visibles
    cy.get(".navbar a").should("have.length.at.least", 4).and("be.visible");
    // Vérifie le lien "Home"
    cy.get(".navbar a").contains("Home").click();
    cy.url().should(
      "eq",
      "https://spring-framework-petclinic-qctjpkmzuq-od.a.run.app/"
    );
    // Vérifie le lien "Find owners"
    cy.get(".navbar a").contains("Find owners").click();
    cy.url().should("include", "/owners");
    // Vérifie le lien "Veterinarians"
    cy.get(".navbar a").contains("Veterinarians").click();
    cy.url().should("include", "/vets");
  });

  //Aller vers la page rechercher des proprio depuis la homepage
  it('Navigates to "Find Owners" page', () => {
    // Clique sur l'icône de recherche et vérifie la redirection
    cy.get(".fa-search").click();

    // Vérifie que le titre de la page est correct
    cy.get("h2").should("have.text", "Find Owners");
  });

  //Aller vers la page de vétérinaires depuis la homepage
  it('Navigates to "Vetenarians" page', () => {
    // Clique sur l'icône "liste" et vérifie la redirection
    cy.get(".fa-th-list").click();
    // Vérifie que le titre de la page est correct
    cy.get("h2").should("have.text", "Veterinarians");
  });
})