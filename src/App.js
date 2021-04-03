import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import FFA from './pages/FFA';

import "./App.css";


export default function App() {
  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ffa">Help With Fundraising</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/ffa' component={FFA}/>
          
          
          
          <Route path='/' exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}
