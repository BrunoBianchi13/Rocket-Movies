const knex = require("../database/knex")
const sqliteConnection = require('../database/sqlite')

class TagsController {
  async index(request, response) {

    const tags = await knex("movie_tags")
      
      
    return response.json(tags);
  }
  async show(request, response) {

    const {movie_id} = request.params
    
    
    const tags = await knex("movie_tags").where({ movie_id })
    return response.json(tags);
  }

}

module.exports = TagsController