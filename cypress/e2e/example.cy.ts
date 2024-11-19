// https://on.cypress.io/api

describe('My First Test', () => {
 
  beforeEach(()=>{
    cy.visit('/')
  })

  it('visits the app root url', () => {
    cy.contains('h1', 'You did it!')
  })

  it('smth', () => {
    cy.get('.item').should('have.length', 5)

    cy.get('.item .details h3').first().should('have.text', 'Documentation')

    cy.get('.item .details h3').last().should('have.text', 'Support Vue')
  })
})
