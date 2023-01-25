// Ingredient routes
const express = require('express')
const router = express.Router()

const getIngredient = require('../controllers/ingredientsController')

router.get('/ingredients', getIngredient)

module.exports = router
