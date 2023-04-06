class LoginPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
  
    getUsername(value) {
      return cy.get('.input').first().type(value);
    }
  
    getPassword(value) {
      return cy.get(':nth-child(4) > .input').type(value);;
    }
  
    submit() {
      const button = cy.get(':nth-child(5) > .button')
      button.click()
    }
  }
  
  export const loginPage=new LoginPage();