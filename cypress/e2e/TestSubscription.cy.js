import { moreUserInfo } from "../pages/autoExercise/accountInfo";
import { registration } from "../pages/autoExercise/signUp";
import { Product} from "../pages/autoExercise/allProducts";
import { shopping} from "../pages/autoExercise/carts"
import { inputs, addToCart, personalInfo, product, subscribe, loginData, validLogin } from "../utils/data";
import { subscription } from "../pages/autoExercise/footer_subscription";

describe("Subscription", () => {
    it("Verify the content of the subscription div", () => {
        cy.visit(Cypress.env("globalUrl"));
        subscription.getSubscriptionDiv().contains('Subscription');
        subscription.getSubscribeInput()
            .should('be.visible')
            .and('have.attr', 'placeholder', subscribe.placeholder);
        subscription.getSubscribeBtn().should('be.visible');
        subscription.getSearchFormText().should('be.visible');
    })
    it("Verify the case when the email input is filled with valid data", () => {
        cy.visit(Cypress.env("globalUrl"));
        subscription.getSubscribeInput().type(validLogin.email);
        subscription.getSubscribeBtn().click();
        subscription.getSuccessMessage().should('be.visible')
    })
    it("Verify Subscription functionality by using Enter keyboard", () => {
        cy.visit(Cypress.env("globalUrl"));
        subscription.getSubscribeInput().type(validLogin.email);
        subscription.getSubscribeInput().type("{Enter}");
        subscription.getSubscribeBtn().click();
        subscription.getSuccessMessage().should('be.visible')
    })
    it("Verify the case when the email input is empty", () => {
        cy.visit(Cypress.env("globalUrl"));
        subscription.getSubscribeBtn().click();
        subscription.getSubscribeInput().should('have.attr', inputs.requiredField);
    })
    it("Verify the case when the email input is filled with wrong email format", () => {
        cy.visit(Cypress.env("globalUrl"));
        subscription.getSubscribeInput().type(loginData.wrongEmail);
        subscription.getSubscribeBtn().click();
        subscription.getSubscribeInput().should('have.attr', inputs.requiredField);
    })
})