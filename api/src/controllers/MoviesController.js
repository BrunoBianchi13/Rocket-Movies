const knex = require("../database/knex")


class MoviesController {
  async create(request, response) {
    const { title, description, rating, tags} = request.body
    const user_id = request.user.id
    console.log(title, description, rating, tags)
    const  id_m  = await knex("movie_notes").insert({
      title,description,rating,user_id
    })



    var movie = (id_m[0]);
    var movie_id = movie.toString();


    const Itags = tags.map(name => {
      return {
        movie_id,name,user_id
      }
    }) 
    console.log(Itags)
    await knex("movie_tags").insert(Itags)
    

    return response.status(201).json()
  }


  async show(request, response) {
    const { id } = request.params

    
    const  movie  = await knex("movie_notes").where({
      id
    }).first();
    const  tags  = await knex("movie_tags").where({
      movie_id: id
    });
    
    return response.json({...movie,tags})
  }

  async delete(request, response) {
    const { id } = request.params


   await knex("movie_notes").where({id}).delete()
    return response.status(201).json()
  }

  async index(request, response) {
    const { title,tags } = request.query;
    const user_id = request.user.id
    console.log(tags)
    let notes;

   
      
      notes = await knex("movie_tags")
        .select([
          "movie_notes.id",
          "movie_notes.title",
          "movie_notes.description",
          "movie_notes.rating",
          "movie_notes.created_at",
          "movie_notes.updated_at",
          "movie_notes.user_id"
        ])
        .where("movie_notes.user_id", user_id)
        .whereLike("title", `%${title}%`)
        .innerJoin("movie_notes", "movie_notes.id", "movie_tags.movie_id")
        .groupBy("movie_notes.id")
        //return response.json(notes);
    
    
    const userTags = await knex("movie_tags").where({ user_id });

    const notesWithTags = notes.map(note => {
      
      const noteTags = userTags.filter(tag => tag.movie_id === note.id);

      return {
        ...note,
        tags: noteTags
      }
    });
    return response.json(notesWithTags);
      
    
    
  }

}

module.exports = MoviesController