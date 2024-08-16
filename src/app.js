//importa o módulo express.
import express from 'express'

//A classe App é definida para encapsular a configuração do servidor Express
class App {
    //No construtor (constructor), ele inicializa uma instância do Express (this.app = express()).
    // Chama os métodos middlewares() e routes() para configurar os middlewares e as rotas da aplicação.
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        //O método middlewares() adiciona um middleware que permite ao servidor processar dados no formato JSON nas requisições.
        this.app.use(express.json())
    }

    //O método routes() está presente, mas ainda não foi implementado. É onde você definirá suas rotas futuramente.
    routes() { }
}
// Exporta a instância da aplicação Express
export default new App().app
