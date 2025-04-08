const jwt = require('jsonwebtoken')
const user = require('../service/user')

const secretKey = 'MySecretKeyPassword'

function authMiddleware(role) {
    return (req, res, next) => {
        const token = req.headers['authorization']
        console.log(token, role)

        if(!token) {
            res.status(400).json({ msg: 'Token inválido ou não fornecido'})
            return 
        }

        jwt.verify(token, secretKey, async (err, decoded) => {
            if(err) {
              console.log(err)
              res.status(400).json({ msg: 'Token inválido ou não fornecido'})
              return 
            }

            const verify = await user.Verify(decoded.id, decoded.role) // Verifica se o id do user existe e se o cargo também
            if(!verify || (role && !role.includes(decoded.role))){
              res.status(401).json({ msg: 'Permissão negada - sem permissão' })
              return
            }

            req.session = decoded
            next()
        })
    }
}

module.exports = authMiddleware