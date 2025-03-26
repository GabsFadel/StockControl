class ApiProduct {

  async FindById(req, res) {
    try {
      const { id } = req.params
      const organization_id = 1
      const product = { id } //await service.findById(product

      res.status(200).send({ product })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async FindAll(req , res) {
    try {
      const organization_id = 1
      const products = [{ organization_id }] //await service.findAll(product

      res.status(200).send({ products })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Create(req, res) {
    try {
      const organization_id = 1
      const { name, description } = req.body
      const product = { name, description } //await service.create(product)

      res.status(200).send({ product })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Update(req, res) {
    try {
      const organization_id = 1
      const { id, name, description } = req.params
      const product = { id, name, description } //await service.update(product)

      res.status(200).send({ product })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Delete(req, res) {
    try {
      const organization_id = 1
      const { id } = req.params
      const product = { id } //await service.delete(product)  

      res.status(200).send({ product })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

}

module.exports = new ApiProduct()