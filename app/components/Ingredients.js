import React from 'react'

export default function Ingredients (props) {

  const { ingredients } = props;

  return ingredients ?
  (
    <div>
      <ul>Ingredients</ul>
      {ingredients.map(ingredient => {
        return (
          <li key={ingredient.id}>{ingredient.name}</li>
        )
      })}
    </div>
  )
  : <h2>Loading...</h2>
}

