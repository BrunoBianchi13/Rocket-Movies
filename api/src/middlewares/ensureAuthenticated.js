const { verify } = require("jsonwebtoken")
const authConfig = require("../configs/auth")

function ensureAuthenticated(request, response, next){
  const authHeader = request.headers.authorization

  if (!authHeader) {
    console.log("token invalido")
  
  }

  const [, token] = authHeader.split(" ")


  const {sub: user_id} = verify(token, authConfig.jwt.secret)

  request.user = {
    id: Number(user_id)
  }

  return next()
}


module.exports = ensureAuthenticated