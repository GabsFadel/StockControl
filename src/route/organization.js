const express = require('express')
const ApiOrganization = require('../api/organization')

const OrganizationRouter = express.Router()

OrganizationRouter.get('/:id', ApiOrganization.FindById)
OrganizationRouter.post('/', ApiOrganization.Create)
OrganizationRouter.put('/:id', ApiOrganization.Update)
OrganizationRouter.delete('/:id', ApiOrganization.Delete)

module.exports = OrganizationRouter