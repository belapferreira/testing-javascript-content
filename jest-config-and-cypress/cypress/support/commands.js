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
