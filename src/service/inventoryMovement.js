const modelInventoryMovement = require('../model/inventoryMovement')
const product = require('../model/products')

const movementTypes = ['out', 'in']

class ServiceInventoryMovement {

  async FindById(inventoryId ,id, transaction) {
    return modelInventoryMovement.findOne(
      { where: { inventoryId, id } },
      { transaction }
    )
  }

  async FindAll(inventoryId, transaction) {
    return modelInventoryMovement.findAll(
      { where: { inventoryId }, include: { model: product }  }, //inclui os nomes dos produtos ao fazer o find no estoque
      { transaction}
    )
  }

  async Create(inventoryId, userId, type, amount, productId, transaction) {
    if (!inventoryId) {
      throw new Error('Favor informar o campo id do estoque')
    } else if (!userId) {
      throw new Error('Favor informar o campo userId')
    } else if (!type || !movementTypes.includes(type)) {
      throw new Error('Favor informar o tipo da movimentação')
    } else if (!amount) {
      throw new Error('Favor informar o campo quantidade')
    } else if (!productId) {
      throw new Error('Favor informar o produto')
    }

    return modelInventoryMovement.create(
      { inventoryId, userId, type, amount, productId },  
      { transaction }
    )
  }

  async Update(inventoryId, id, type, amount, transaction) {
    const oldInventoryMovement = await this.FindById(organization_id, inventoryId, id, transaction)
    if (!oldInventoryMovement) {
      throw new Error('Estoque nao encontrado')
    } 
    if(type && !movementTypes.includes(type)) {
      throw new Error('Favor informar o tipo da movimentação')
    }

    oldInventoryMovement.type = type || oldInventoryMovement.type
    oldInventoryMovement.amount = amount || oldInventoryMovement.amount

    return oldInventoryMovement.save({ transaction })
  }

  async Delete(inventoryId, id, transaction) {
    const oldInventoryMovement = await this.FindById(inventoryId, id, transaction)

    if (!oldInventoryMovement) {
      throw new Error('Estoque nao encontrado')
    }

    await oldInventoryMovement.destroy({ transaction })
  }

}

module.exports = new ServiceInventoryMovement()