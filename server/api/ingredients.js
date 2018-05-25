'use strict'

const router = require('express').Router();
const { Ingredient, Recipe } = require('../db/models')

module.exports = router;

router.get('/', (req, res, next) => {
  Ingredient.findAll({
    include: [Recipe]
  })
  .then(ingredients => res.json(ingredients));
})

