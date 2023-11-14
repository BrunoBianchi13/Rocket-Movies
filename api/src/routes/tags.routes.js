const { Router } = require('express')

const TagsController = require('../controllers/TagsController')

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/:movie_id', tagsController.show)
tagsRoutes.get('/', tagsController.index)
module.exports = tagsRoutes