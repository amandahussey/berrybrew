import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../../components/Home/Home.jsx';
import Ingredients from '../../components/Ingredients/Ingredients.jsx';
// import { Home, Ingredients } from '../../components';
import { fetchIngredients } from '../../store/reducers';

class Root extends Component {

  componentDidMount() {
    this.props.fetchIngredients();
  }

  render() {

    const { ingredients } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home ingredients={ingredients} /> } />
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

export default connect(mapStateToProps, mapDispatchToProps)(Root)
