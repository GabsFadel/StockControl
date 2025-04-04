const modelUser = require('../model/user')
const bcrypt = require('bcrypt')

const roles = ['admin', 'employee']
const salt = 12 

class ServiceUser {
  async FindAll(organization_id, transaction) {
      return modelUser.findAll(
        { where: { organization_id }, transaction}
      )
  }

  async FindById(organization_id, id, transaction) {
      return modelUser.findOne(
        { where: {organization_id, id }, transaction}
      )
  }

  async Create(organization_id, name, email, password, role, transaction) {
      if(!organization_id) {
        throw new Error('Favor informar o campo empresa')
      } else if(!name) {
        throw new Error('Favor informar o campo nome')
      } else if(!email) {
        throw new Error('Favor informar o campo email')
      } else if(!password) {
        throw new Error('Favor informar o campo senha')
      } else if(!role || !roles.includes(role)) {
        throw new Error('Favor informar o campo permissão corretamente')
      }

      const hashPass = await bcrypt.hash(password, salt)

      return modelUser.create(
        { organization_id, name, email, password: hashPass, role }, 
        { transaction }
      )
  }

  async Update(organization_id, id ,name, email, password, role, transaction) {
      const oldUser = await this.FindById(organization_id, id, transaction)
      if(!oldUser) {
          throw new Error('Usuário não encontrado')
      }

      if(!role && !roles.includes(role)) {
        throw new Error('Favor informar o campo permissão corretamente')
      } 

      if(role && oldUser.role === 'admin') {
          oldUser.role = role || role
      }

      oldUser.name = name || oldUser.name
      oldUser.email = email || oldUser.email
      oldUser.password = password ? await bcrypt.hash(password, salt) : oldUser.password
  
      await oldUser.save({ transaction })

      return oldUser
  }

  async Delete(organization_id, id, transaction) {
      const oldUser = await this.FindById(organization_id, id, transaction)

      if(!oldUser) {
          throw new Error('Usuário não encontrado')
      }

      oldUser.destroy({ transaction })
  }

  // async Login () 
  // async Verify()
}

module.exports = new ServiceUser()