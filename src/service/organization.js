const modelOrganization = require('../model/organization')
const ServiceUser = require('./user')

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

        const password = "abc123"
        const user = await ServiceUser.Create(
          organization.id, 
          `Admin${name}`,
          email,
          password,
          'admin',
          transaction
        )

        return { organization, user: { ...user.dataValues, password} }
    }

    async Update(id, name, address, phone, email, transaction) {
        const organization = await this.FindById(id, transaction)
        if(!organization) {
          throw new Error('Empresa não encontrada')
        }

        organization.name = name || organization.name
        organization.address = address || organization.address
        organization.phone = phone || organization.phone
        organization.email = email || organization.email

        return organization.save({ transaction })
    }

    async Delete(organization_id, id, transaction) {
        const organization = await this.FindById(id, transaction)

        organization.destroy({ transaction })
    }


}

module.exports = new ServiceOrganization()