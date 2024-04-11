/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import produtosPage from "../../support/page_objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
        ///cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Apollo Running Short'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)

        
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('atlas-fitness-tank/')
    });

    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.visitarProduto('Oslo-Trek-Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Brown', 2)
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
        })
    });
    
});