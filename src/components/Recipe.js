import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Recipe.css'

class Recipe extends React.Component {
  render() {
    const {details} = this.props;
    return (
      <div className='recipe'>
      <ul>
      <li><Link to={`/recipe/${this.props.index}`}>{details.title}</Link></li>
      <li>{details.description}</li>
      <li><button onClick={() => this.props.removeRecipe(this.props.index)}>Delete</button></li>    
      </ul>
      </div>
    )
  }
}

export default Recipe;