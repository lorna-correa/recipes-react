import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import base from '../base';

class RecipeForm extends React.Component {
    render() {
        return (
            <div>
             {Object.keys(this.props.recipes).map(this.renderRecipes)}
            <h3>Recipe Form Component</h3>
            <AddRecipeForm addRecipe={this.props.addRecipe}/>
            <button onClick={this.props.loadSamples}>Load Sample Recipes</button>`
            </div>
        )
    }

    constructor() {
        super();
        this.renderRecipes = this.renderRecipes.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

    renderRecipes(key){
        const recipe = this.props.recipes[key]
        return (
        <div key={key}>
          <p>{key}</p>
          <input value={recipe.title} onChange={(e) => this.handleChange(e, key)}  type="text" name="title" placeholder="Recipe name" />
          <input value={recipe.description} onChange={(e) => this.handleChange(e, key)} type="text" name="description" placeholder="Recipe description" />
        </div>
        )
      }

      handleChange(e, key){
        const recipe = this.props.recipes[key]
        const updatedRecipe = {
          ...recipe,
          [e.target.title]: e.target.value
        }
        this.props.updateRecipe(key, updatedRecipe)
      }

}

export default RecipeForm;