// Importa o módulo express.
import express from 'express'
// Importa as rotas definidas no arquivo routes.js.
import routes from './routes.js'

// A classe App é definida para encapsular a configuração do servidor Express.
class App {
    // No construtor (constructor), ele inicializa uma instância do Express (this.app = express()).
    // Chama os métodos middlewares() e routes() para configurar os middlewares e as rotas da aplicação.
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        // O método middlewares() adiciona um middleware que permite ao servidor processar dados no formato JSON nas requisições.
        this.app.use(express.json())
    }

    // O método routes() configura as rotas da aplicação.
    // Usa o módulo de rotas importado para definir o comportamento das rotas.
    routes() {
        this.app.use(routes)
    }
}

// Exporta a instância da aplicação Express.
export default new App().app
