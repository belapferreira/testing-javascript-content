describe('login', () => {
  it('should login a existing user', () => {
    cy.createUser().then(user => {
      cy.visit('/')
      cy.findByText(/login/i).click()
      cy.findByLabelText(/username/i).type(user.username)
      cy.findByLabelText(/password/i).type(user.password)
      cy.findByText(/submit/i).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/`)
      cy.window().its('localStorage.token').should('be.a', 'string')

      cy.findByTestId('username-display')
      cy.should('have.text', user.username)
    })
  })
})
