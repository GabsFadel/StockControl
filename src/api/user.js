const serviceUser = require("../service/user")

class ApiUser {

  async FindById(req, res) {
    try {
      const { id, organization_id} = req.session
      const user = await serviceUser.FindById(organization_id, id)

      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async FindAll(req , res) {
    try {
      const organization_id = req.session.organization_id
      const users = await serviceUser.FindAll(organization_id)

      res.status(200).send({ users })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Create(req, res) {
    try {
      const organization_id = req.session.organization_id
      const { name, email, password, role } = req.body
      const user = await serviceUser.Create(organization_id, name, email, password, role)

      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Update(req, res) {
    try {
      const organization_id = req.session.organization_id
      const  id = req.params.id || req.session.id
      const { name, email, password, role } = req.body
      const user = await serviceUser.Update(organization_id, id, name, email, password, role)

      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
  async Delete(req, res) {
    try {
      const organization_id = req.session.organization_id
      const id = req.params.id || req.session.id
      const user = await serviceUser.Delete(organization_id, id)  

      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Login(req, res) {
    try {
      const { email, password } = req.body
      const token = await serviceUser.Login(email, password)

      res.status(200).send({ token })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

}

module.exports = new ApiUser()