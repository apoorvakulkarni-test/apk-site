import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Work from './pages/Work';
import About from './pages/About'
import NavBar from '@components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route exact path="/">
            <Redirect to="/work" />
          </Route>
        </Switch>
      </Router>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
