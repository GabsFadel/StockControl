const getProductMovements = require('../fns/get-product-movements')
const modelInventory = require('../model/inventory')
const products = require('../model/products')
const inventoryMovement = require('./inventoryMovement')

class ServiceInventory {
  async FindById(organization_id, id, transaction) {
    const inventory = await modelInventory.findOne(
      { where: { organization_id, id } },
      { transaction }
    )
    if(!inventory) {
      throw new Error('Estoque nao encontrado')
    }

    const movements = await inventoryMovement.FindAll(inventory.id) // vai possuir todas as movimentações daquele estoque

    const result = getProductMovements(movements)

    return { ...inventory.dataValues, result } //retorno da função dilui no dataValues
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