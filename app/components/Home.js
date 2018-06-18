import React from 'react'
import { withRouter } from 'react-router-dom';

function Home (props) {

  const { history } = props

  return (
    <div style={container}>
      <div style={header} onClick={() => history.push('/select-ingredients')}>
        <h1 style={berry}>berry</h1><h1 style={brew}>brew</h1>
      </div>
    </div>
  )
}

export default withRouter(Home)

// ========== STYLES ==========

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  header: {
    display: 'flex'
  },
  berry: {
    color: '#CCCCFF'
  },
  brew: {
    color: '#CC66FF'
  }
}

const { container, header, berry, brew } = styles

