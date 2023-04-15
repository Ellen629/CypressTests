describe("Carusel", () => {
    it("Loads the homepage and checks for icons", () => {
      cy.visit(Cypress.env("globalUrl"));
      cy.get(".item").then(($elem) => {
        expect($elem).to.contain('Automation')
        expect($elem).to.contain('Full-Fledged practice website for Automation Engineers')
        expect($elem).to.contain('All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.')
      });
      cy.get('.active > :nth-child(1) > .test_cases_list > .btn')
        .should('be.visible')
        .and('contain','Test Cases');
      cy.get('.active > :nth-child(1) > .test_cases_list > .btn')
        .should('have.css','background-color','rgb(92, 184, 92)');
      cy.get('.active > :nth-child(1) > .test_cases_list > .btn')
        .realHover().should('have.css','background-color','rgb(254, 152, 15)')
      cy.get('.active > :nth-child(1) > .apis_list > .btn')
        .should('have.css','background-color','rgb(92, 184, 92)')
        .and('contain','APIs list for practice');    
      cy.wait(7000)
      cy.get(".item").should('have.class','active');
      cy.get('.item.active')
      .find('img')
      .should('be.visible')
      .and('have.attr', 'src', '/static/images/home/girl2.jpg');
      cy.clock()
      cy.clock()
      cy.get('#slider')
        .find('.item.active')
        .invoke('index')
        .should('eq', 0) 
        cy.tick(5000)
        cy.get('#slider')
        .find('.item.active')
        .invoke('index')
        .should('eq', 1) 
        cy.tick(5000)
        cy.get('#slider')
        .find('.item.active')
        .invoke('index')
        .should('eq', 2) 
    });
  });
  