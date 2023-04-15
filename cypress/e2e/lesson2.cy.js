import { registration } from "../pages/autoExercise/signUp";
import { inputs } from "../utils/data";

let userName,secondUserName
describe("Registration", () => {
  it("Verify that the form UI matches with the requirements", () => {
    registration.visit("login");
    cy.get('.signup-form > h2').contains('New User Signup!');
    registration.getUsername().should('have.attr', 'placeholder', 'Name');
    registration.getEmail().should('have.attr', 'placeholder', 'Email Address');
    registration.getUsername().should('have.css','background-color', inputs.backgroundColor);
    registration.submit().contains('Signup')
      .and('have.css', 'background-color',inputs.buttonColor);
    registration.submit().each(($el) => {
      $el.trigger("mouseover");
      expect($el).to.have.css("background-color", inputs.hoveredBtnColor);
    });
  })

  it("Verify registration functionality with valid credentials", () => {
    registration.visit("login");
    registration.getUsername().type(registration.generateRandomName(5, ""));
    registration
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
      });
    registration
      .getEmail()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });
      cy.url().should('include', '/signup');
  });
  it("Verify registration functionality with empty username", () => {
    registration.visit("login");
    const emptyUserName = registration.getUsername().clear();
    emptyUserName.blur();
    registration.getUsername().should('have.attr', inputs.requiredField);
    registration.getEmail().type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
  });

  it("Verify registration functionality with empty email", () => {
    registration.visit("login");
    registration.getUsername().type(registration.generateRandomName(5));
    const emptyEmail = registration.getEmail().clear();
    emptyEmail.blur();
    registration.getEmail().should('have.attr', inputs.requiredField);
    registration.submit().click();
  });

  it("Verify registration functionality without symbol @ in email address", () => {
    registration.visit("login");
    registration.getUsername().type(registration.generateRandomName(5));
    registration.getEmail().type(registration.generateRandomName(5, "gmail.com"));
    registration.submit().click();
  })

});
