import {buildUser} from '../support/generate'

describe('login', () => {
  it('should login a existing user', () => {
    const user = buildUser()

    // Register the user
    cy.request({
      url: 'http://localhost:3000/register',
      method: 'POST',
      body: user,
    })

    // Test login
    cy.visit('/')
    cy.findByText(/login/i).click()
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.findByText(/submit/i).click()

    // Check if the login is successful
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.window().its('localStorage.token').should('be.a', 'string')

    cy.findByTestId('username-display')
    cy.should('have.text', user.username)
  })
})
