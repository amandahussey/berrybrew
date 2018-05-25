
// IMPORT INDIVIDUAL REDUCERS

import { combineReducers } from 'redux';
import ingredients from './ingredients';
import recipes from './recipes';


// COMBINE REDUCERS

const rootReducer = combineReducers({
  ingredients,
  recipes,
})

export default rootReducer;


// EXPORT --ACTION TYPES--ACTION CREATORS--THUNK CREATORS--REDUCERS-- FOR EACH

export * from './ingredients';
export * from './recipes';
