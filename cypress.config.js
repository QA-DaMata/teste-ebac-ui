const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nfukdf", //precisa dessa informação para gerar o relatorio na cloud (pega dentro da cloud)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true //para gravar os testes feitos pelo terminal
  },
});
