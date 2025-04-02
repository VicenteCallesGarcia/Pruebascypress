describe('pruebas de login', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Form Authentication').click()
  })

  it('login correcto con usuario valido', () => {
    
    
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')
  })

  it('login incorrecto con usuario invalido', () => {
    
    
    cy.get('#username').type("tomsmith7")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').should('contain', 'Your username is invalid!')
  })

  it('login incorrecto con contraseña invalida', () => {
    
    
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword7!")
    cy.get('.fa').click()
    cy.get('#flash').should('contain', 'Your password is invalid!')
  })

})