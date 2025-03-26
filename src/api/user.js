class ApiUser {

  async FindById(req, res) {
    try {
      const organization_id = 1 
      const { id } = req.params
      const user = {} //await service.findById(user

      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async FindAll(req , res) {
    try {
      const organization_id = 1
      const users = [{}] //await service.findAll(user

      res.status(200).send({ users })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Create(req, res) {
    try {
      const organization_id = 1
      const { name, email, password, role } = req.body
      const user = {} //await service.create(user)

      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Update(req, res) {
    try {
      const { id } = req.params
      const { name, email, password, role } = req.body
      const user = {} //await service.update(user)

      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Delete(req, res) {
    try {
      const organization_id = 1
      const { id } = req.params
      const user = {} //await service.delete(user)  

      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

}

module.exports = new ApiUser()