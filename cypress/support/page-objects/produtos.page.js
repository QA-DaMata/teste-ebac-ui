class ProdutosPage {

    visitarUrl(){
        cy.visit('produtos/')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)//usamos o eq na busca quando existe mais de um elemento com esse id ou class
        cy.get('[type="submit"]').eq(1).click()
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.products > .row')
            .contains(nomeProduto)//para capturar pelo nome do produto na lista
            .click()
        
    }

    visitarProduto(){

    }

    adicionarProdutoCarrinho(){

    }

}export default new ProdutosPage()