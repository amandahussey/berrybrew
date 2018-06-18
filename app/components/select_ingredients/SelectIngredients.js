import React, { Component } from 'react'
import Ingredients from './Ingredients'
import { withRouter } from 'react-router-dom'

function Select_Wrapper (props) {

  return (
    <div style={container}>
      <Ingredients selected={false} />
      <Ingredients selected={true} />
    </div>
  )
}

export default withRouter(Select_Wrapper)

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

const { container } = styles
