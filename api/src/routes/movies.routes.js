const { Router } = require('express')

const MoviesController = require('../controllers/MoviesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const movieRoutes = Router()

movieRoutes.use(ensureAuthenticated)

const moviesController = new MoviesController()
movieRoutes.get('/', moviesController.index)
movieRoutes.post('/', moviesController.create)
movieRoutes.get('/:id', moviesController.show)
movieRoutes.delete('/:id', moviesController.delete)
module.exports = movieRoutes