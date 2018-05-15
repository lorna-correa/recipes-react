import React, { Component } from 'react';
import Recipe from './components/Recipe';
import Nav from './components/Nav';
import RecipeForm from './components/RecipeForm';
import RecipeDetail from './components/RecipeDetail';
import './assets/css/App.css';
import recipesFile from './data/recipes-object'
import base from './base'

class App extends Component{

  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.removeRecipe = this.removeRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this)
    this.state = {
      recipes: {}
    }
  }

  render() {
    return (
      <div className="App">
      <Nav navMenu />
      <ul>
      {
          Object.keys(this.state.recipes)
              .map(key => <Recipe key={key}
                index={key} 
                details={this.state.recipes[key]}
                removeRecipe={this.removeRecipe} />)
      }
      </ul>
     
      <RecipeForm
          addRecipe={this.addRecipe} />
          loadSamples={this.loadSamples}
          recipes={this.state.recipes}
          updateRecipe={this.updateRecipe} />
      </div>
    );
  }

  addRecipe(recipe) {
    const recipes = {...this.state.recipes}
    const timestamp = Date.now()
    recipes[`recipe-${timestamp}`] = recipe
    this.setState({ recipes: recipes })
  }

  updateRecipe(key, updatedRecipe){
    const recipes = {...this.state.recipes};
    recipes[key] = updatedRecipe;
    this.setState({ recipes })
  }

  loadSamples(){
    this.setState({
      recipes: recipesFile
    })
  }

  removeRecipe(key){
    const recipes = {...this.state.recipes}
    recipes[key] = null
    this.setState({recipes})
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

export default App;
