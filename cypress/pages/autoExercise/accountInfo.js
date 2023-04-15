
class MoreUserInfo {
    visit(endpoint) {
      cy.visit(Cypress.env('globalUrl') + endpoint);
    }
    getGenderTitle(){
      return cy.get('.clearfix > label');
    }
    getMr(){
      return cy.get('[type="radio"]').check("Mr");
    }
    getMrs(){
      return cy.get('[type="radio"]').check("Mrs");
    }
    getName(){
      return cy.get('[data-qa="name"]');
    }
    getEmail(){
      return cy.get('[data-qa="email"]');
    }
    getPassword(){
      return cy.get('[data-qa="password"]');
    }
    getDays(){
      return cy.get('[data-qa="days"]');
    }
    getMonths(){
      return cy.get('[data-qa="months"]');
    }
    getYears(){
      return cy.get('[data-qa="years"]');
    }
    getFirstName(){
      return cy.get('[data-qa="first_name"]')
    }
    getLastName(){
      return cy.get('[data-qa="last_name"]')
    }
    getCompany(){
      return cy.get('[data-qa="company"]')
    }
    getAddress(){
      return cy.get('[data-qa="address"]')
    }
    getAddress2(){
      return cy.get('[data-qa="address2"]')
    }
    getCountry(){
      return cy.get('[data-qa="country"]')
    }
    getState(){
      return cy.get('[data-qa="state"]')
    }
    getCity(){
      return cy.get('[data-qa="city"]')
    }
    getZipcode(){
      return cy.get('[data-qa="zipcode"]')
    }
    getMobile(){
      return cy.get('[data-qa="mobile_number"]')
    }
    getCreateAccount(){
      return cy.get('[data-qa="create-account"]')
    }
  
  }
  export const moreUserInfo = new MoreUserInfo();