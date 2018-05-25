'use strict';

const Sequelize = require('sequelize');
const db = require('../index');
const Recipe = require('./Recipe');

const Ingredient = db.define('ingredient', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
// },  {
//   defaultScope: {
//     include: [Recipe]
//   }
});

module.exports = Ingredient;
