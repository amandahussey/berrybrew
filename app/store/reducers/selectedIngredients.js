import axios from 'axios';

// ACTION TYPES

const ADD_INGREDIENT = 'ADD_INGREDIENT'


// ACTION CREATORS

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    ingredient
  }
}

// REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return [...state, action.ingredient]
    default:
      return state
  }
}
