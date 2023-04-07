import { loginPage } from "../pages/SignIn";
import { data } from "../utils/data";
describe("SignIn", () => {
  it("Verify that the UI matches with the requirements ", () => {
    loginPage.visit();
    cy.get('.input').should('have.css', 'border', data.inputBorder);
    cy.get(':nth-child(4) > .input').should('have.css', 'border', data.inputBorder);
    cy.get(':nth-child(5) > .button').should('have.css', 'background-color', 'rgb(202, 129, 37)')
    cy.get('h2').contains('Customer Login');
    cy.get('h2').should('have.css', 'font-family', data.fontFamily);
    cy.get('h2').should('have.css', 'font-size', '16px');
    cy.get('h2').should('have.css', 'color', 'rgb(57, 121, 170)');
    cy.get(':nth-child(1) > b').contains('Username');
    cy.get(':nth-child(3) > b').contains('Password');
   });

  it("Verify login functionality with valid credentials", () => {
    loginPage.visit();
    loginPage.getUsername(data.username);
    loginPage.getPassword(data.password);
    loginPage.submit();
    cy.url().should('include', '/parabank/overview.htm');
  });

  it("Verify login functionality with wrong credentials", () => {
    loginPage.visit();
    loginPage.getUsername('Username');
    loginPage.getPassword('begemotik');
    loginPage.submit();
    cy.url().should('include', '/parabank/login.htm');
  });

  it("Verify login functionality with empty password field", () => {
    loginPage.visit();
    loginPage.getUsername(data.username);
    loginPage.getPassword(' ');
    loginPage.submit();
    cy.url().should('include', '/parabank/login.htm');
  });

  it("Verify login functionality with empty username field", () => {
    loginPage.visit();
    loginPage.getUsername(' ');
    loginPage.getPassword(data.password);
    loginPage.submit();
    cy.url().should('include', '/parabank/login.htm');
  });
  
});
