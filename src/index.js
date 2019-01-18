import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Info from './components/info';
const r = (
    <Router>
        <div>
        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
        </div>
      
    </Router>
  );

ReactDOM.render(r, document.getElementById('root'));
