import React from 'react';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';
import dados from '../sample_data/recipes.json';

const Home = ({ recipes = dados, filtrados = [], searchString, onClick }) => (
  <div className="row">
    {filtrados.map(c => {
      return (
        <RecipeItem
          key={Math.random()}
          title={c.title}
          ingredients={c.ingredients}
          thumbnail={c.thumbnail}
          highlight={searchString}
          onClick={onClick}
        />
      );
    })}
  </div>
);

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array,
};

export default Home;
