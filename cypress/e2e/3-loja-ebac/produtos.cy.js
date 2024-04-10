/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').contains('Abominable Hoodie').click()
        //.first()
        //.last()
        //.eq(2) 'posição
        //.contains('Abominable Hoodie').
    });
    
});