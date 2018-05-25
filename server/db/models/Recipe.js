'use strict';

const Sequelize = require('sequelize');
const db = require('../index');
const Ingredient = require('./Ingredient');

const Recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
// },  {
//   defaultScope: {
//     include: [Ingredient]
//   }
});

module.exports = Recipe;
