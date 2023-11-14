const knex = require("../database/knex")
const { compare } = require("bcryptjs")
const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")
class SessionsController {
  async create(request, response) {
    const { email, password} = request.body


    const user = await knex("users").where({email}).first()

    if (!user) {
      return response.json("Usuario nao existe")
    }
    

    const passwordCheck = await compare(password, user.password)

    if (!passwordCheck) {
      return response.json("senha nao existe")
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return response.json({ user, token})
  }
}

module.exports = SessionsController