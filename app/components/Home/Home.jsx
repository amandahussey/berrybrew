import React from 'react';
import Ingredients from '../../components/Ingredients/Ingredients.jsx';

export default function Home (props) {

  const { ingredients } = props;

  return (
    <div>
      <h1>HOME</h1>
      <Ingredients ingredients={ingredients} />
    </div>
  )
}

