const serviceProduct = require("../service/product")

class ApiProduct {

  async FindById(req, res) {
    try {
      const { id } = req.params
      const organization_id = req.session.organization_id
      const product = await serviceProduct.FindById(organization_id, id)

      res.status(200).send({ product })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async FindAll(req , res) {
    try {
      const organization_id = req.session.organization_id
      const products = await serviceProduct.FindAll(organization_id)

      res.status(200).send({ products })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Create(req, res) {
    try {
      const organization_id = req.session.organization_id
      const { name, description } = req.body
      const product = await serviceProduct.Create(organization_id, name, description)

      res.status(200).send({ product })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Update(req, res) {
    try {
      const organization_id = req.session.organization_id
      const { id } = req.params
      const { name, description } = req.body
      const product = await serviceProduct.Update(organization_id, id, name, description)

      res.status(200).send({ product })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Delete(req, res) {
    try {
      const organization_id = req.session.organization_id
      const { id } = req.params
      const product = await serviceProduct.Delete(organization_id, id)  

      res.status(200).send({ product })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

}

module.exports = new ApiProduct()