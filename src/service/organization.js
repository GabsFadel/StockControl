const modelOrganization = require('../model/organization')

class ServiceOrganization {

    async FindById(id, transaction) {
      return modelOrganization.findByPk(id, {transaction})
    }

    async Create(name, address, phone, email, transaction) {
        if(!name) {
          throw new error('Favor informar o campo nome')
        } else if(!address) {
          throw new error('Favor informar o campo endereço')
        } else if(!phone) {
          throw new error('Favor informar o campo telefone')
        } else if(!email) {
          throw new error('Favor informar o campo email')
        }
        const organization = await modelOrganization.create(
            { name, address, phone, email },
            { transaction }
        )

        // criar um usuário quando criar uma organization

        return organization
    }

    async Update(id, name, address, phone, email, transaction) {
        const organization = await this.FindById(id, transaction)

        organization.name = name || organization.name
        organization.address = address || organization.address
        organization.phone = phone || organization.phone
        organization.email = email || organization.email

        return organization.save({ transaction })
    }




}

module.exports = new ServiceOrganization()