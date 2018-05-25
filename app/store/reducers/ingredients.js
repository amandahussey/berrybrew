import axios from 'axios';

// ACTION TYPES

const GET_INGREDIENTS = 'GET_INGREDIENTS'


// ACTION CREATORS

export const getIngredients = (ingredients) => {
  return {
    type: GET_INGREDIENTS,
    ingredients
  }
}

// THUNK CREATORS

export const fetchIngredients = () => {
  return (dispatch) => {
   return axios.get('/api/ingredients')
      .then(res => res.data)
      .then(ingredients => {
        const action = getIngredients(ingredients);
        dispatch(action);
      });
  }
}

// REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.ingredients;
    default:
      return state;
  }
}
