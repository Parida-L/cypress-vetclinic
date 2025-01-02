class AddPetPage {
  verifyNewPetPage() {
    cy.get("h2").should("contain.text", "New Pet");
  }

  addPet(name, birthDate, type) {
    cy.get("#name").type(name);

    // Set the date in flatpickr
    cy.get("#birthDate").invoke("val", birthDate).trigger("change");

    cy.get("#type").select(type);
    cy.get('[type="submit"]').click();
  }

  verifyPetInTable(petName) {
    cy.get("table").should("contain.text", petName);
  }
}

export default new AddPetPage();
