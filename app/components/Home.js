import React from 'react'
import Ingredients from './Ingredients'

export default function Home (props) {

  const { ingredients } = props

  return (
    <div>
      <div style={container}>
        <h1 style={berry}>berry</h1><h1 style={brew}>brew</h1>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  berry: {
    color: '#CCCCFF'
  },
  brew: {
    color: '#CC66FF'
  }
}

const { container, berry, brew } = styles

