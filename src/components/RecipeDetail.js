import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Nav.css';
import base from '../base';

class RecipeDetail extends React.Component {

  constructor(){
    super();
    this.state = {
      recipes: {}
    }
  }

  render(){

    const recipeId = this.props.match.params.pid;
    const myRecipe = this.state.recipes[recipeId];

    if (myRecipe) {
        this.recipeTitle = myRecipe.title;
        this.recipeDescription = myRecipe.description;     
        } 

        return (
            <div className="recipe-detail">
            <h1>Recipe Detail</h1>
            <h2>{this.recipeTitle}</h2>
            
            <p>{this.recipeDescription}</p>
          
            <Link to='/'>Home</Link>
            </div>
          )
  }

  componentWillMount(){
    this.ref = base.syncState(`lorna-correa-recipes/recipes`, {
      context: this,
      state: 'recipes'
    })
  }

  componentWillUmount(){
    base.removeBinding(this.ref)
  }

}

export default RecipeDetail;