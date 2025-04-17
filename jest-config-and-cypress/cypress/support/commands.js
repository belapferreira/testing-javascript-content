import {buildUser} from "./generate"

Cypress.Commands.add('createUser', overrides => {
  const user = buildUser(overrides)

  // Register the user
  cy.request({
    url: 'http://localhost:3000/register',
    method: 'POST',
    body: user,
  }).then(response => ({...response.body.user, ...user}))
})


Cypress.Commands.add('assertHome', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/`)
})

Cypress.Commands.add('assertLoggedInAs', user => {
  cy.window().its('localStorage.token').should('be.a', 'string')

  cy.findByTestId('username-display')
  cy.should('have.text', user.username)
})
