import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import RecipePage from './RecipePage';
import { slugify } from '../helpers';
import recipes from '../sample_data/recipes.json';
import RecipeItem from "./RecipeItem";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchString: window.location.pathname.substr(1) || "", //this.props.match.params.
            recipes: recipes.results,
            recipesFiltrados: [],
        }
    }

    componentDidMount() {
        // const str = this.props.match.params.searchString;
        // this.setState({searchString: str});
        this.realizarFiltro(this.state.searchString);
    }

    onChange = (event) => {
        const newurl= event.target.value;
        this.setState({searchString: newurl});
        this.props.history.push(newurl);
        this.realizarFiltro(newurl);
    };

    onClick = (titulo) => {
        this.props.history.push("/recipe/" +titulo)
    };

    realizarFiltro = (filtro)=>{
        let currentList = [];
        let newList = [];
        if(filtro !== "" && filtro !== null && filtro !== undefined){
            currentList = this.state.recipes;
            newList = currentList.filter(item => {
                const lc = item.ingredients.toLowerCase();
                const titulo = item.title.toLowerCase();
                const filter = filtro.toLowerCase();
                this.setState({searchString: filtro});
                return (lc.includes(filter) || titulo.includes(filter)) ;
            });
        } else {
            newList = this.state.recipes;
            this.setState({searchString: ""});
        }
        this.setState({recipesFiltrados: newList});
        // console.log("Filtraaa",this.state.recipesFiltrados.length);
    };
    render() {
    return (
      <div className="App">
          {/* TODO: Navbar precisa receber a string da URL */}
          <Navbar
                searchString={this.state.searchString}
                onChange={this.onChange}
          />
        )}/>
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Home filtrados={this.state.recipesFiltrados} searchString={this.state.searchString.toLowerCase()} onClick={this.onClick}/>
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
    )
  }
}

export default App
