const modelInventory = require('../model/inventory')

class ServiceInventory {

  async FindById(organization_id, id, transaction) {
    return modelInventory.findOne(
      { where: { organization_id, id } },
      { transaction }
    )
  }

  async FindAll(organization_id, transaction) {
    return modelInventory.findAll(
      { where: { organization_id } },
      { transaction }
    )
  }

  async Create(organization_id, name, transaction) {
    if (!organization_id) {
      throw new Error('Favor informar o campo organization_id')
    } else if (!name) {
      throw new Error('Favor informar o campo nome')
    }

    return modelInventory.create(
      { organization_id, name },
      { transaction }
    )
  }

  async Update(organization_id, id, name, transaction) {
    const oldInventory = await this.FindById(organization_id, id, transaction)
    if (!oldInventory) {
      throw new Error('Estoque nao encontrado')
    }
    oldInventory.name = name || oldInventory.name

    return oldInventory.save({ transaction })
  }

  async Delete(organization_id, id, name, transaction) {
    const oldInventory = await this.FindById(organization_id, id, transaction)
    if (!oldInventory) {
      throw new Error('Estoque nao encontrado')
    }
    oldInventory.name = name || oldInventory.name

    return oldInventory.destroy({ transaction })
  }

}

module.exports = new ServiceInventory()