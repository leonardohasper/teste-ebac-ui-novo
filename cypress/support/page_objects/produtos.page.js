class ProdutosPage {
    //////cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2) 'posição
        ///.contains('Abominable Hoodie')
    visitarUrl() {
        cy.visit('produtos/')
    }

    buscarProduto(nomeProduto){
        cy.get('[class="tbay-search form-control input-sm"]').eq(1).type(nomeProduto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()


    }

    buscarProdutoLista(nomeProduto){
        cy.get('.products > .row')
        .contains(nomeProduto).type(nomeProduto)
        ///.click()
    }

    visitarProduto(nomeProduto){
    cy.visit(`produtos/${nomeProduto}`)

    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    ///cy.get('.woocommerce-message').should('contain', 'adicionados no seu carrinho.')
    }
}

export default new ProdutosPage()

