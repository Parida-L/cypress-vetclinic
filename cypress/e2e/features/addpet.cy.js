describe("Add a Pet", () => {
  it("Adds a new pet to an owner", () => {
    // Accède à la page de détails d'un propriétaire existant (remplacez l'ID par un valide)
    cy.visit("/owners/2");

    // Sélectionne le bouton "Add New Pet" spécifique et clique dessus
    cy.get("a.btn")
      .contains("Add New Pet") // Filtre les boutons contenant le texte "Add New Pet"
      .click();

    // Vérifie que le titre de la page contient "New Pet"
    //cy.get("h2").should("contain.text", "New Pet");

    // Vérifie la présence du champ "Name" et entre le nom du nouvel animal
    cy.get("#name").should("exist").type("John J");

    // Définir la date de naissance
    cy.get("#birthDate")
      .should("exist")
      .click() // Ouvre le calendrier
      .then(() => {
        // Utilise invoke pour définir la date directement
        cy.get("#birthDate").invoke("val", "2023-01-01").trigger("change"); // Déclenche un événement de changement pour que le champ soit mis à jour
      });

    // Sélectionne un type d'animal (par exemple, "dog") dans le menu déroulant
    cy.get("#type").select("dog").should("have.value", "dog");

    // Vérifie la présence du bouton "Add Pet", clique dessus pour soumettre le formulaire
    cy.get('[type="submit"]')
      .should("exist")
      .and("contain.text", "Add Pet")
      .click();

    // Vérifie que le tableau contenant les informations de l'animal inclut "Buddy"
    //cy.get("table").should("contain.text", "John J");
  });
});
