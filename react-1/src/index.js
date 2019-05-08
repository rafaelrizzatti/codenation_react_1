import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css';
import Home from './components/Home';
import RecipePage from './components/RecipePage';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
