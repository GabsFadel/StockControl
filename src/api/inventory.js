class ApiInventory {

  async FindById(req, res) {
    try {
      const organization_id = 1
      const { id } = req.params
      const inventory = {} //await service.findById(inventory

      res.status(200).send({ inventory })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async FindAll(req , res) {
    try {
      const organization_id = 1
      const inventories = [{}] //await service.findAll(inventory

      res.status(200).send({ inventories })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Create(req, res) {
    try {
      const organization_id = 1
      const { name } = req.body 
      const inventory = {  } //await service.create(inventory)

      res.status(200).send({ inventory })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Update(req, res) {
    try {
      const organization_id = 1
      const { id } = req.params
      const { name } = req.body 
      const inventory = {} //await service.update(inventory)

      res.status(200).send({ inventory })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Delete(req, res) {
    try {
      const organization_id = 1
      const { id } = req.params
      const inventory = {} //await service.delete(inventory)  

      res.status(200).send({ inventory })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
}

module.exports = new ApiInventory()