import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './index.css';
import App from './App';
import RecipeDetail from './components/RecipeDetail';
import registerServiceWorker from './registerServiceWorker';

class Main extends React.Component {
    render() {
      return (
        <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/recipe/:pid" component={RecipeDetail} />
        </div>
        </Router>
      )
    }
  }


ReactDOM.render(
  <Main />,
  document.getElementById('root')
)

registerServiceWorker();
