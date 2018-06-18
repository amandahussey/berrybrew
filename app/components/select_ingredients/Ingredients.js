import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addIngredient } from '../../store/reducers/selectedIngredients';

function Ingredients (props) {

  const { selected, allIngredients, selectedIngredients, addIngredient } = props

  const header = selected ? "Selected Ingredients" : "All Ingredients"
  const ingredients = selected ? selectedIngredients : allIngredients

  return (
    <div>
      <h1>{header}</h1>
      {ingredients.map(ingredient => {
        return (
          <div style={container} key={ingredient.id}>
            <button onClick={() => addIngredient(ingredient)} style={button}>+</button>
            <p>{ingredient.name}</p>
          </div>
        )
      })}
    </div>
  )
}

const mapState = state => {
  return {
    allIngredients: state.allIngredients,
    selectedIngredients: state.selectedIngredients
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators({addIngredient}, dispatch)
}

export default connect(mapState, mapDispatch)(Ingredients)


const styles = {
  container: {
    display: 'flex'
  },
  button: {
    borderRadius: '50%',
    width: '2em'
  }
}

const { container, button } = styles
