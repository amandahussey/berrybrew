import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import SelectIngredients from './select_ingredients/SelectIngredients'
import { fetchIngredients } from '../store/reducers'

class Root extends Component {

  componentDidMount() {
    this.props.fetchIngredients()
  }

  render() {

    const { ingredients } = this.props

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/select-ingredients" component={SelectIngredients} />
        </Switch>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchIngredients: () => dispatch(fetchIngredients())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))
