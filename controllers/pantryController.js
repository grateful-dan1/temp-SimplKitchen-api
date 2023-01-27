const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const Pantry = require('../models/Pantry')
const User = require('../models/User')

const Ingredient = require('../models/Ingredient')

const getAllIngredients = async (req, res) => {
  const ownedBy = req.user.userId
  //console.log(`Owned by :: ${ownedBy}`);


  let result = Pantry.find({ ownedBy })
  let pantry = await result

  items = pantry[0].ingredients

  //console.log(pantry.ingredients);
  res.status(StatusCodes.OK).json({ items })
}
const getIngredient = async (req, res) => {
  res.send('getIngredient')
}
const addIngredient = async (req, res) => {

  // Get User's pantry array (need to be authenticated)
  // Get the related ingredient from the Ingredient dataabse. Should be included in req.body
  // Push this ingredient onto the User's pantry array

  const ownedBy = req.user.userId

  let result = Pantry.find({ ownedBy })
  let pantry = await result

  console.log(pantry[0].ingredients)
  pantry[0].ingredients.push(req.body)
  console.log(pantry[0].ingredients)

  res.send('createIngredient')
}
// module.exports = getAllIngredients
module.exports = {
  getAllIngredients,
  getIngredient,
  addIngredient
}