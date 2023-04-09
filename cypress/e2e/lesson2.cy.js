import { registrationPage } from "../pages/SignIn";
import { validData } from "../utils/data";
import { validationMessages } from "../utils/messages";
import { message } from "../utils/messages";
import { Titles } from "../utils/messages";

describe("Registration", () => {
  it("Verify that the UI matches with the requirements ", () => {
    registrationPage.visit();
    cy.get('.title').contains(Titles.title);
    cy.get('#rightPanel > p').contains(Titles.subtitle);
    registrationPage.getFirstname();
    cy.get(':nth-child(1) > [align="right"] > b').contains('First Name').and('have.css', 'color', 'rgb(95, 122, 119)');
    registrationPage.submit().then(($button) => {
      expect($button).to.have.css('background-color','rgb(202, 129, 37)');
      expect($button).to.have.value('REGISTER');
    });
    registrationPage.submit().click()
    });

  it("Verify registration functionality with valid credentials", () => {
    registrationPage.visit();
    registrationPage.getFirstname().type(validData.firstName);
    registrationPage.getLastname().type(validData.lastName);
    registrationPage.getAddress().type(validData.userAddress);
    registrationPage.getCity().type(validData.userCity);
    registrationPage.getState().type(validData.userState);
    registrationPage.getZipCode().type(validData.userZipCode);
    registrationPage.getPhone().type(validData.userPhone);  
    registrationPage.getSSN().type(validData.userSSN);
    registrationPage.getUserName().type(validData.validUserName);
    registrationPage.getPassword().type(validData.validPassword);
    registrationPage.getConfirmPassword().type(validData.validRepeatedPass);
    registrationPage.submit();
    cy.url().should('include', '/parabank/register.htm');
    cy.get("#rightPanel > p").then(($text) => {
      expect($text).to.contain(message.successMessage);
      });
  });

  it.only("Verify registration functionality with already used user name", () => {
    registrationPage.visit();
    registrationPage.getFirstname().type(validData.firstName);
    registrationPage.getLastname().type(validData.lastName);
    registrationPage.getAddress().type(validData.userAddress);
    registrationPage.getCity().type(validData.userCity);
    registrationPage.getState().type(validData.userState);
    registrationPage.getZipCode().type(validData.userZipCode);
    registrationPage.getPhone().type(validData.userPhone);  
    registrationPage.getSSN().type(validData.userSSN);
    registrationPage.getUserName().type(validData.validUserName);
    registrationPage.getPassword().type(validData.validPassword);
    registrationPage.getConfirmPassword().type(validData.validRepeatedPass);
    registrationPage.submit();
    cy.get("#customer.username.errors").then(($error) => {
       expect($error).to.contain(validationMessages.usedUsernameMessage);
       });
  });
  
});

