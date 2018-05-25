const { db, Ingredient, Recipe } = require('./db/models');

const recipes = [
  {
    name: 'baking soda mask',
    description: 'for brighter skin!'
  },
  {
    name: 'egg mask',
    description: 'for tigher, moisturized skin!'
  }
];

const ingredients = [
  {
    name: 'baking soda',
  },
  {
    name: 'milk',
  },
  {
    name: 'eggs',
  }
];


db.sync({force: true})
  .then(() => {
    return Promise.all(recipes.map(recipe => {
      return Recipe.create(recipe);
    }))
  })
  .then(() => {
    return Promise.all(ingredients.map(ingredient => {
      return Ingredient.create(ingredient);
    }))
  })
  .then(() => {
    console.log('seed success!!')
  })
  .catch((err) => console.error(err))
