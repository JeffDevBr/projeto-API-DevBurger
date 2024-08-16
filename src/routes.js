// Importa o módulo Router do Express para definir as rotas da aplicação.
import { Router } from 'express'

// Cria uma nova instância do Router para configurar as rotas.
const routes = new Router()

// Define uma rota GET para o caminho raiz ('/').
routes.get('/', (req, res) => {
    // Retorna uma resposta JSON com o status 200 e uma mensagem.
    return res.status(200).json({ message: 'Hola mundo!' })
})

// Exporta o objeto de rotas para ser utilizado em outros módulos.
export default routes
