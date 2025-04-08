const express = require('express')
const ApiOrganization = require('../api/organization')
const authMiddleware = require('../middleware/auth')

const OrganizationRouter = express.Router()

//O authMiddleware está sendo passado aqui, pois há rotas que somente o admin pode ter acesso, e outras o employee não
//Porém, há rotas que ambos podem acessar, isso é uma verificação de acesso de rotas por cargo
OrganizationRouter.get('/:id', authMiddleware('admin'), ApiOrganization.FindById)
OrganizationRouter.post('/', ApiOrganization.Create)
OrganizationRouter.put('/:id', authMiddleware('admin'), ApiOrganization.Update)
OrganizationRouter.delete('/:id', authMiddleware('admin'), ApiOrganization.Delete)

module.exports = OrganizationRouter