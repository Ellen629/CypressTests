import { moreUserInfo } from "../pages/autoExercise/accountInfo";
import { registration } from "../pages/autoExercise/signUp";
import { inputs, personalInfo } from "../utils/data";

describe("Additional info about the user", () => {
  beforeEach(() => {
    registration.visit("login");
    registration.getUsername().type(registration.generateRandomName(5));
    registration.getEmail().type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.url('includes', 'signup')
  })
  it("Verify that the form UI matches with the requirements", () => {
      cy.get(':nth-child(1) > b')
        .contains('Enter Account Information')
        .and('have.css', 'color', 'rgb(254, 152, 15)');
      cy.get('form > .title > b')
      .contains('Address Information')
      .and('have.css', 'color', 'rgb(254, 152, 15)');
      moreUserInfo.getGenderTitle().contains('Title');
      cy.get('.login-form > form > :nth-child(3)').contains('label', 'Name');
      moreUserInfo.getName().should('have.css', 'background-color', inputs.btnBackColor);
      cy.get('.login-form > form > :nth-child(4)').contains('label', 'Email');
      cy.get('.login-form > form > :nth-child(5)').contains('label', 'Password');
      cy.get('.login-form > form > :nth-child(6)').contains('label', 'Date of Birth');
  })
    it.only("Verify that the fields are filled with valid data", () => {
      moreUserInfo.getMr();
      moreUserInfo.getName();
      moreUserInfo.getEmail();
      moreUserInfo.getPassword().type(personalInfo.password);
      moreUserInfo.getDays().select('9').should('have.value', '9');
      moreUserInfo.getMonths().select('July').should('have.value', '7');
      moreUserInfo.getYears().select('1991').should('have.value', '1991');
      cy.get('form > :nth-child(7)').select()
      moreUserInfo.getFirstName().type(personalInfo.firstName);
      moreUserInfo.getLastName().type(personalInfo.lastName);
      moreUserInfo.getCompany().type(personalInfo.company);
      moreUserInfo.getAddress().type(personalInfo.address);
      moreUserInfo.getAddress2().type(personalInfo.address2);
      moreUserInfo.getCountry().select('United States').should('have.value', 'United States');;
      moreUserInfo.getState().type(personalInfo.state);
      moreUserInfo.getCity().type(personalInfo.city);
      moreUserInfo.getZipcode().type(personalInfo.zipcode);
      moreUserInfo.getMobile().type(personalInfo.phone)
      moreUserInfo.getCreateAccount().click();
      cy.url('includes', 'account_created')
})
    it("Verify the Signup/Login button becomes Logout with filled  valid data", () => {
      moreUserInfo.getMr();
      moreUserInfo.getName();
      moreUserInfo.getEmail();
      moreUserInfo.getPassword().type(personalInfo.password);
      moreUserInfo.getDays().select('9').should('have.value', '9');
      moreUserInfo.getMonths().select('July').should('have.value', '7');
      moreUserInfo.getYears().select('1991').should('have.value', '1991');
      moreUserInfo.getFirstName().type(personalInfo.firstName);
      moreUserInfo.getLastName().type(personalInfo.lastName);
      moreUserInfo.getCompany().type(personalInfo.company);
      moreUserInfo.getAddress().type(personalInfo.address);
      moreUserInfo.getAddress2().type(personalInfo.address2);
      moreUserInfo.getCountry().select('United States').should('have.value', 'United States');;
      moreUserInfo.getState().type(personalInfo.state);
      moreUserInfo.getCity().type(personalInfo.city);
      moreUserInfo.getZipcode().type(personalInfo.zipcode);
      moreUserInfo.getMobile().type(personalInfo.phone)
      moreUserInfo.getCreateAccount().click();
      cy.url('includes', 'account_created');
      // cy.get('.nav > :nth-child(4) > a').should('contain','Logout');
    })
    it("Verify that the password field is required", () => {
      moreUserInfo.getMr();
      moreUserInfo.getName();
      moreUserInfo.getEmail();
      const emptyPassword = moreUserInfo.getPassword().clear();
      emptyPassword.blur();
      moreUserInfo.getPassword().should('have.attr', inputs.requiredField);
      moreUserInfo.getDays().select('9').should('have.value', '9');
      moreUserInfo.getMonths().select('July').should('have.value', '7');
      moreUserInfo.getYears().select('1991').should('have.value', '1991');
      moreUserInfo.getFirstName().type(personalInfo.firstName);
      moreUserInfo.getLastName().type(personalInfo.lastName);
      moreUserInfo.getCompany().type(personalInfo.company);
      moreUserInfo.getAddress().type(personalInfo.address);
      moreUserInfo.getAddress2().type(personalInfo.address2);
      moreUserInfo.getCountry().select('United States').should('have.value', 'United States');;
      moreUserInfo.getState().type(personalInfo.state);
      moreUserInfo.getCity().type(personalInfo.city);
      moreUserInfo.getZipcode().type(personalInfo.zipcode);
      moreUserInfo.getMobile().type(personalInfo.phone)
      moreUserInfo.getCreateAccount().click();
})
it("Verify that the mobile number field do not accept letters", () => {
      moreUserInfo.getMr();
      moreUserInfo.getName();
      moreUserInfo.getEmail();
      moreUserInfo.getPassword().type(personalInfo.password);
      moreUserInfo.getDays().select('9').should('have.value', '9');
      moreUserInfo.getMonths().select('July').should('have.value', '7');
      moreUserInfo.getYears().select('1991').should('have.value', '1991');
      moreUserInfo.getFirstName().type(personalInfo.firstName);
      moreUserInfo.getLastName().type(personalInfo.lastName);
      moreUserInfo.getCompany().type(personalInfo.company);
      moreUserInfo.getAddress().type(personalInfo.address);
      moreUserInfo.getAddress2().type(personalInfo.address2);
      moreUserInfo.getCountry().select('United States').should('have.value', 'United States');;
      moreUserInfo.getState().type(personalInfo.state);
      moreUserInfo.getCity().type(personalInfo.city);
      moreUserInfo.getZipcode().type(personalInfo.zipcode);
      moreUserInfo.getMobile().type('test')
      moreUserInfo.getCreateAccount().click();
})
    

})