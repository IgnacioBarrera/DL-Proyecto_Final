describe('Ingresa a contacto y envia un mensaje', () => {
    it('Visita la vista de contacto', () => {
        cy.visit('/contacto');
        cy.contains('h2', 'MINERA BARBA S.C.M');
        let correo = "testing@barba.com";
        let nombre = "Prueba";
        let mensaje = "Probando testin con cypress"
        cy.get('[data-cy="inputCorreo"]').type(correo);
        cy.get('[data-cy="inputNombre"]').type(nombre);
        cy.get('[data-cy="inputMensaje"]').type(mensaje);
        cy.get('[data-cy="formularioEnviar"]').submit();
        
    })
})