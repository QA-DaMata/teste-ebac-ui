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

    visitarProduto(nomeProduto){
        //cy.visit(`produtos/${nomeProduto}`)

        const urlFormatada = nomeProduto.replace(/ /g, '-')//retira todos os espaços em branco e adiciona o - 
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()//de alguma forma só esta funcionando quando eu coloco 2 vezes uma das requisições
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

}export default new ProdutosPage()