import React from 'react';
import PropTypes from 'prop-types';

const RecipePage = ({ recipe }) =>
  recipe !== null ? (
    <div>
      <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          {recipe.ingredients}
        </p>
      </div>
    </div>
  ) : (
    'Recipe not found'
  );

RecipePage.propTypes = {
  recipe: PropTypes.object,
};

// import React from 'react';
// import data from '../sample_data/recipes.json';
// import Navbar from './Navbar';
// import RecipeItem from './RecipeItem';
// import { slugify } from '../helpers';
// // import { slugify } from "../helpers";

// const recipes = data.results;

// const onChange = (event, h) => {
//   const newurl = event.target.value;
//   h.push('/');
//   h.push(newurl);
// };
// const RecipePage = ({ match, history, thumbnail, title, ingredients }) => {
//   if (!match) return null;

//   const recipe = recipes.filter(
//     ({ title }) => match.params.recipeTitle === slugify(title)
//   ) || [{ thumbnail: 'vazio', title: 'titulio', ingredients: 'testess' }];

//   // if (recipe.length === 0){
//   //     return(<div>Recipe not found</div>);
//   // }
//   // const tam = recipe.length+1;
//   const tam = recipe.length;
//   if (tam > 0) {
//     thumbnail = recipe[0].thumbnail;
//     title = recipe[0].title;
//     ingredients = recipe[0].ingredients;
//   }
//   // const { thumbnail,title, ingredients} = recipe[0];

//   return (
//     <div className="App">
//       <div className="container mt-10">
//         <div className="row">
//           {/*{*/}
//           {/*this.state.newRecipes.length > 0 ?*/}
//           {/*this.state.newRecipes.map((item, index) => {*/}
//           {/*return(<RecipeItem redirect={this.props} highlight={this.state.searchString.toLowerCase()} key={index} value={this.state.searchString} title={item.title} src={item.thumbnail} ingredients={item.ingredients}/>)})*/}
//           {/*:<div>No Results to Show</div>*/}
//           {/*}*/}

//           {tam > 0 ? (
//             <div className="col-sm-3 mt-4">
//               <div className="card">
//                 <img
//                   className="card-img-top img-fluid"
//                   src={thumbnail}
//                   alt=""
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{title}</h5>
//                   <p className="card-text">
//                     <strong>Ingredients: </strong> {ingredients}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div> Recipe Not Found </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

export default RecipePage;
