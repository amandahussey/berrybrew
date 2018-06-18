
// IMPORT INDIVIDUAL REDUCERS

import { combineReducers } from 'redux'
import allIngredients from './allIngredients'
import selectedIngredients from './selectedIngredients'
import recipes from './recipes'



// COMBINE REDUCERS

const rootReducer = combineReducers({
  allIngredients,
  selectedIngredients,
  recipes,
})

export default rootReducer;


// EXPORT --ACTION TYPES--ACTION CREATORS--THUNK CREATORS--REDUCERS-- FOR EACH

export * from './allIngredients'
export * from './selectedIngredients'
export * from './recipes'
