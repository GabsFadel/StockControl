const express = require('express')
const database = require('./src/database')
const organizationRouter = require('./src/route/organization')
const userRouter = require('./src/route/user')
const inventoryRouter = require('./src/route/inventory')
const movementRouter = require('./src/route/inventoryMovement')
const productRouter = require('./src/route/products')
const apiUser = require('./src/api/user')

const port = 3000
const app = express()

app.use(express.json())

app.post('/api/v1/login', apiUser.Login)

app.use('/api/v1/organization',organizationRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/inventory', inventoryRouter)
app.use('/api/v1/inventoryMovement', movementRouter)
app.use('/api/v1/products', productRouter)

database.db
    .sync({ force: false}) // cuidar para alterar para false e dropar o database 
    .then((_) => {
        app.listen(port, () =>{
          console.log(`Aplicação rodando na porta ${port}`)
        })
    })
    .catch((e) => {
      console.error(`Não foi possivel conectar com o banco ${e}`)
    })