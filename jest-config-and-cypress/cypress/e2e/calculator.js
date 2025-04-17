describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('http://localhost:8080')

    cy.findByText(/^1$/).click()
    cy.findByText(/^\+$/).click()
    cy.findByText(/^2$/).click()
    // .debug()
    /* cy.then(subject => {
      debugger
      return subject
    }) */
   // cy.pause()
    cy.findByText(/^=$/).click()

    cy.findByTestId('total').should('have.text', '3')
  })
})

describe('authenticated calculator', () => {
  it('displays the username', () => {
    cy.createUser().then(user => {
      cy.login(user)

      cy.visit('/')

      cy.findByTestId('username-display')
      cy.should('have.text', user.username)

      cy.findByText(/logout/i).click()
      cy.findByTestId('username-display')
      cy.should('not.exist')
    })
  })
})
