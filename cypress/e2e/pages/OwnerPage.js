class OwnerPage {
  visitOwner(ownerId) {
    cy.visit(`/owners/${ownerId}`);
  }

  addNewPet() {
    cy.get("a.btn").contains("Add New Pet").click();
  }

  searchOwner(lastName) {
    cy.get("#lastName .form-control").type(lastName);
    cy.get('[type="submit"]').click();
  }

  verifyOwnersTable() {
    cy.get("#owners").should("contain.text", "Owners");
    cy.get("table").should("exist");
  }
}

export default new OwnerPage();
