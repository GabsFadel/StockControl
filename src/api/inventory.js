const serviceInventory = require('../service/inventory')

class ApiInventory {

  async FindById(req, res) {
    try {
      const organization_id = req.session.organization_id
      const { id } = req.params
      const inventory = await serviceInventory.FindById(organization_id, id)

      res.status(200).send({ inventory })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async FindAll(req , res) {
    try {
      const organization_id = req.session.organization_id
      const inventories = await serviceInventory.FindAll(organization_id)

      res.status(200).send({ inventories })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Create(req, res) {
    try {
      const organization_id = req.session.organization_id
      const { name } = req.body 
      const inventory = await serviceInventory.Create(organization_id, name)

      res.status(200).send({ inventory })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Update(req, res) {
    try {
      const organization_id = req.session.organization_id
      const { id } = req.params
      const { name } = req.body 
      const inventory = await serviceInventory.Update(organization_id, id, name)

      res.status(200).send({ inventory })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Delete(req, res) {
    try {
      const organization_id = req.session.organization_id
      const { id } = req.params
      const inventory = await serviceInventory.Delete(organization_id, id)  

      res.status(200).send({ inventory })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
}

module.exports = new ApiInventory()