'use strict';

const db = require('../index');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');

Ingredient.belongsToMany(Recipe, {through: 'ingredient_recipe'});
Recipe.belongsToMany(Ingredient, {through: 'ingredient_recipe'});

module.exports = {
	db,
	Ingredient,
	Recipe
}
