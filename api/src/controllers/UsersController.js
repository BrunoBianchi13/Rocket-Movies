const { hash } = require("bcryptjs")
const sqliteConnection = require('../database/sqlite')
const { compare } = require("bcryptjs")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body
    console.log(name, email, password)
    const database = await sqliteConnection()
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    const hashedPassword = await hash(password, 8)

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    )

    return response.status(201).json()
  }
  async show(request, response) {
    const { id } = request.params
    const database = await sqliteConnection()
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

    return response.json({user})
  }
  async update(request, response) {

    console.log("oiii")

    const user_id = request.user.id
    const { name, email, password, old_password } = request.body
    
    const database = await sqliteConnection()
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])
    
    const passwordCheck = await compare(old_password, user.password)
    const hashedPassword = await hash(password, 8)

    user.name = name
    user.email = email
    
    
    if (passwordCheck == true) {
      user.password = hashedPassword

      await database.run("UPDATE users SET name = ?,email = ?,password = ?, updated_at = DATETIME('now') WHERE id = ?", [user.name , user.email ,user.password, user_id])
      return response.json();
    } 
    
    
    
   
  }
  async delete(request, response) {
    console.log("oi")
    const { id } = request.params
    const database = await sqliteConnection()
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])
    await database.get("DELETE FROM users WHERE id = (?)", [id])

    return response.status(201).json()
  }
}


module.exports = UsersController