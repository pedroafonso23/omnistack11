const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json()) // Estou falando para o express, antes de todas as requisicoes, ir la no corpo da requisicao e converter o json em um objeto do JS
app.use(routes)
app.use(errors())

module.exports = app

// app.listen(3333)




/**
 * Route / Resource
 */

/**
 * Metodo HTTP:
 * 
 * GET: Buscar/listar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma info no back-end
*/

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos "?" (filtros, paginacao)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */