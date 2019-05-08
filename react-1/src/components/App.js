import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import RecipePage from './RecipePage';
import { slugify } from '../helpers';
import recipes from '../sample_data/recipes.json';
import RecipeItem from './RecipeItem';

class App extends Component {
  getRecipes = (filter = '') =>
    recipes.results.filter(
      recipe =>
        recipe.title.toLowerCase().includes(filter) ||
        recipe.ingredients.toLowerCase().includes(filter)
    );

  onClick = titulo => {
    this.props.history.push('/recipe/' + titulo);
  };

  getRecipeFromSlug = slug =>
    recipes.results.find(recipe => slugify(recipe.title) === slug);

  render() {
    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar />
        <div className="container mt-10">
          <Switch>
            <Route
              exact
              path="/recipe/:recipeTitle"
              render={props => (
                <RecipePage
                  recipe={this.getRecipeFromSlug(
                    props.match.params.recipeTitle
                  )}
                />
              )}
            />
            <Route
              exact
              path="/:searchString?"
              render={props => (
                <Home
                  filtrados={this.getRecipes(props.match.params.searchString)}
                  searchString={props.match.params.searchString}
                  onClick={this.onClick}
                />
              )}
            />
          </Switch>
          {/*<div className="row">*/}
          {/*{this.state.recipesFiltrados.map(c=>{*/}
          {/*return(*/}
          {/*<RecipeItem title={c.title} ingredients={c.ingredients} thumbnail={c.thumbnail} highlight={this.state.searchString.toLowerCase()}*/}
          {/*/>*/}
          {/*);*/}
          {/*})*/}
          {/*}*/}
          {/*</div>*/}
          {/*<Route path="/" component={Home} />*/}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
