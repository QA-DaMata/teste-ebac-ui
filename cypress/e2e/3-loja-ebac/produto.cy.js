/// <reference types='cypress'/>
import produtosPage from "../../support/page-objects/produtos.page";
import produtosObj from "../../fixtures/produtos.json"
describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        //cy.visit('produtos/')
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.single_add_to_cart_button').should('exist')
    })

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.product-block')
            .first()//para capturar o primeiro elemento da lista
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.single_add_to_cart_button').should('exist')
    })

    it('Deve selecionar o ultimo produto da lista', () => {
        cy.get('.product-block')
            .last()//para capturar o ultimo elemento da lista
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.single_add_to_cart_button').should('exist')
    })

    it('Deve selecionar o 3° produto da lista', () => {
        cy.get('.product-block')
            .eq(2)//para capturar um especifico na lista pela posição dele 
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.single_add_to_cart_button').should('exist')
    })

    it('Deve buscar um produto com sucesso - usando page-objetcs', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
        cy.get('.single_add_to_cart_button').should('exist')
    })

    it('Deve visitar a pagina do produto ', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    })

    it('Deve adicionar produto ao carrinho', () => {
        let produtoName = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produtoName)
        produtosPage.addProdutoCarrinho('L', 'Black', 5)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')

    })

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)//precisa passar a posição do array
            produtosPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
    })

});