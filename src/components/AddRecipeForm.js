import React, { Component } from 'react';
import '../assets/css/AddRecipeForm.css';

class AddRecipeForm extends Component {
    render(){
        return (
           <form ref={(input)=>this.recipeForm = input } onSubmit={(e) => this.createRecipe(e)}>
               <input ref={(input) => this.title = input } type="text" placeholder="Recipe Name" />
               <input ref={(input) => this.description = input } type="text" placeholder="Recipe Description" />
               <button type="submit">Add Recipe </button>
           </form>
        )
    }

    createRecipe(event){
        event.preventDefault();
        const recipe = {
            title: this.title.value,
            description: this.description.value,
        }
        this.props.addRecipe(recipe);
        this.recipeForm.reset()
    }
    
}

export default AddRecipeForm;