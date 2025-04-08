const modelUser = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const roles = ['admin', 'employee']
const salt = 12 
const secretKey = 'MySecretKeyPassword'

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

  async Login (email, password, transaction) {
    if(!email || !password) {  
      throw new Error('Favor informar email e senha')
    }

    const user = await modelUser.findOne(
      { where: { email } },
      {transaction}
    )
    if(!user) {
      throw new Error("Email ou senha inválidos") //retorna valor padrão, para não ter brecha para invasores
    }

    //processo abaixo verifica se email e senha existem, se sim retorna um token
    const verify = await bcrypt.compare(password, user.password)

    if(verify) {
      return jwt.sign({
        id: user.id,
        role: user.role,
        organization_id: user.organization_id
      }, secretKey, { expiresIn: 60 * 60 } )
    }

    throw new Error("Email ou senha inválidos")
  }
  async Verify(id, role, transaction) {
      return modelUser.findOne(
          { where: { id, role }, transaction}
        )
    }
}

module.exports = new ServiceUser()