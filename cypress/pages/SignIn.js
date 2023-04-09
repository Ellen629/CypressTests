class RegistrationPage {
  visit() {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
  }

  getRegistrationForm() {
    return cy.get('#customerForm');
  }

  getFirstname() {
    return cy.get(':nth-child(1) > [width="20%"]');
  }

  getLastname() {
    return cy.get(':nth-child(2) > [width="20%"]');
  }

  getAddress(value) {
    return cy.get(':nth-child(3) > [width="20%"]');
  }
  getCity(value) {
    return cy.get(':nth-child(4) > [width="20%"]');
  }
  getState(value) {
    return cy.get(':nth-child(5) > [width="20%"]');
  }
  getZipCode(value) {
    return cy.get(':nth-child(6) > [width="20%"]');
  }
  getPhone(value) {
    return cy.get(':nth-child(7) > [width="20%"]');
  }
  getSSN(value) {
    return cy.get(':nth-child(8) > [width="20%"]');
  }

  getUserName(value) {
    return cy.get(':nth-child(10) > [width="20%"]');
  }

  getPassword(value) {
    return cy.get(':nth-child(11) > [width="20%"]');
  }

  getConfirmPassword(value) {
    return cy.get(':nth-child(12) > [width="20%"]');
  }

  submit() {
    const register = cy.get('[colspan="2"] > .button');
    register.click();
  }
}

export const registrationPage = new RegistrationPage();
