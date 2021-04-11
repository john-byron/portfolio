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
import Counseling from './pages/Counseling';
import StatementOfFaith from './pages/StatementOfFaith';
import BibleReference from './pages/BibleReference';

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
            <Link to="/about" >About</Link>
          </li>
          
          <li>
            <Link to="/ffa">Help With Fundraising</Link>
          </li>
          <li>
            <Link to="/counseling">Counseling</Link>
          </li>
          <li>
            <Link to="/statement">Statement of Faith</Link>
          </li>
          <li>
            <Link to="/bible-statement"></Link>
          </li>
        </ul>

        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/ffa' component={FFA}/>
          <Route path='/counseling' component={Counseling}/>
          <Route path='/statement' component={StatementOfFaith}/>
          <Route path='/bible-statement' component={BibleReference}/>
          
          
          
          <Route path='/' exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}
