// https://docs.cypress.io/api/introduction/api.html

describe('Ingresa usuario con cuenta registrada', () => {
  it('Visits the app root url', () => {
    cy.visit('/login');
    cy.contains('h1', 'Iniciar Sesión');
    let correo = "barba@probando.com";
    let contraseña = "1234567";
    cy.get('[data-cy="inputCorreo"]').type(correo);
    cy.get('[data-cy="inputContraseña"]').type(contraseña);
    cy.get('[data-cy="formularioEntrar"]').submit();
  })
})
