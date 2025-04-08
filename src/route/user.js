const express = require('express')
const ApiUser = require ('../api/user')
const authMiddleware = require('../middleware/auth')

const userRouter = express.Router()

//O authMiddleware está sendo passado aqui, pois há rotas que somente o admin pode ter acesso, e outras o employee não
//Porém, há rotas que ambos podem acessar, isso é uma verificação de acesso de rotas por cargo

//opções do USER por si só
userRouter.get('/info',authMiddleware(), ApiUser.FindById)
userRouter.put('/',authMiddleware(), ApiUser.Update)
userRouter.delete('/',authMiddleware(), ApiUser.Delete)

//opções do ADM
userRouter.post('/',authMiddleware('admin'), ApiUser.Create)
userRouter.get('/',authMiddleware('admin'), ApiUser.FindAll)
userRouter.get('/:id',authMiddleware('admin'), ApiUser.FindById)
userRouter.put('/:id',authMiddleware('admin'), ApiUser.Update)
userRouter.delete('/:id', authMiddleware('admin'), ApiUser.Delete)

module.exports = userRouter
