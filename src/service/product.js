const modelProduct = require('../model/products')

class ServiceProduct {

  async FindById(organization_id, id, transaction) {
    return modelProduct.findOne(
      { where: { organization_id, id } },
      { transaction }
    )
  }

  async FindAll(organization_id, transaction) {
    return modelProduct.findAll(
      { where: { organization_id } },
      { transaction }
    )
  }

  async Create(organization_id, name, description, transaction) {
    if (!organization_id) {
      throw new Error('Favor informar o campo empresa')
    } else if (!name) {
      throw new Error('Favor informar o campo nome')
    } else if (!description) {
      throw new Error('Favor informar o campo descricao')
    }

    return modelProduct.create(
      { organization_id, name, description },
      { transaction })
  }

  async Update(organization_id, id, name, description, transaction) {
    const oldProduct = await this.FindById(organization_id, id, transaction)

    if (!oldProduct) {
      throw new Error('Produto nao encontrado')
    }
    oldProduct.name = name || oldProduct.name
    oldProduct.description = description || oldProduct.description

    return oldProduct.save({ transaction })
  }

  async Delete(organization_id, id, transaction) {
    const oldProduct = await this.FindById(organization_id, id, transaction)

    if (!oldProduct) {
      throw new Error('Produto nao encontrado')
    }

    oldProduct.destroy({ transaction })
  }

}

module.exports = new ServiceProduct()