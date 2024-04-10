/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('leonardo.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, leonardo.teste (não é leonardo.teste? Sair)')
    });

    it('Deve exibir mensagem de erro ao exibir usuário inválido', () => {
        cy.get('#username').type('ze.ninguem@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')

    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('leonardo.teste@teste.com.br')
        cy.get('#password').type('senhaerrada@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'está incorreta. Perdeu a senha?')
    });

    it('deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, leonardo.teste (não é leonardo.teste? Sair)')
        
    });

    it('deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha , {log:false})
            cy.get('.woocommerce-form > .button').click()
    })
})

    

    it.only('deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login('leonardo.teste@teste.com.br','teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, leonardo.teste (não é leonardo.teste? Sair)')
        
    });

})