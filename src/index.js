import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Work from './pages/Work';
import About from './pages/About'
import UConnSurvive from './pages/UConnSurvive'
import Rider from './pages/Rider'
import Wish from './pages/Wish'
import Amazon from './pages/Amazon'
import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//  <Route exact path="/">
// <Redirect to="/work" />
// </Route>
// 
ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={() => {
    window.location.href = 'https://apkportfolio.wixsite.com/home';
    return null;
}} />
          <Route exact path="/work/uconnsurvive" component={UConnSurvive} />
          <Route exact path="/work/wish" component={Wish} />
          <Route exact path="/work/rider" component={Rider} />
          <Route exact path="/work/amazon" component={Amazon} />
        </Switch>
        <Footer />
      </Router>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
