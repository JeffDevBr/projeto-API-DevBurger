// Importa a instância da aplicação Express definida em app.js
import app from "./app.js"

// Inicia o servidor na porta 3001 e imprime uma mensagem de confirmação no console
app.listen(3001, () => console.log('Olá, Estou rodando na porta 3001!'))
