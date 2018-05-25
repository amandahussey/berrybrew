'use strict'

const router = require('express').Router();
const { Recipe, Ingredient } = require('../db/models')

module.exports = router;

router.get('/', (req, res, next) => {
  Recipe.findAll({
    include: [Ingredient]
  })
  .then(recipe => res.json(recipe));
})

