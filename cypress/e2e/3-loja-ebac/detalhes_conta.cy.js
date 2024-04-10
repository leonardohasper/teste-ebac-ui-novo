/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account/') 
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
    });

it.only('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Leonardo', 'Silva', 'leonardo_hasper')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'modificados com sucesso.')
    
});
});