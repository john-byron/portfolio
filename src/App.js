import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  a,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './pages/Home';

import Services from './pages/Services';
import AdminHelp from './pages/AdminHelp';
import FFA from './pages/FFA';
import Counseling from './pages/Counseling';

import Resources from './pages/Resources';
import MissionCheckList from './pages/MissionCheckList';
import Books from './pages/Books';
import InterestingFacts from './pages/InterestingFacts';
import AreasThatNeedMissionaries from './pages/AreasThatNeedMissionaries';
import Budget from './pages/Budget';
import Blog from './pages/Blog';

import About from './pages/About';
import StatementOfFaith from './pages/StatementOfFaith';
import ContactUs from './pages/ContactUs';


import References from "./pages/References";
import BibleReference from './pages/BibleReference';
import BasicMap from './pages/Maps/BasicMap';

import "./App.css";


export default function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="buffer">
          
            <a className="dropbtn" href="/">Home</a>
          

          <div className="dropdown">
            
              <a className="dropbtn" href="/Services">Services</a>


              <div className="dropdown-content">
                <a href="/Admin">Help With The Boring Stuff</a>
                <a href="/FFA">Help With Fundraising</a>
                <a href="/Counseling">Help With Your Mental State</a>
              </div>

            

          </div>


          <div className="dropdown">
            
              <a className="dropbtn" href="/Resources">Resources</a>

              <div className="dropdown-content">
                <a href="/MissionCheckList">Missionary Check List</a>
                <a href="/Books">Books To Read</a>
                <a href="/interesting-facts" Interesting Facts>Intersting Facts</a>
                <a href="/AreasThatNeedMissionaries">Areas That Need Missionaries</a>
                <a href="/Budget">Help with Budgeting For Your Mission</a>
                <a href="/Blog">Our Blog</a>
              </div>

            

          </div>

          <div className="dropdown">
            
              <a className="dropbtn" href="/About" >About Us</a>

              <div className="dropdown-content">
                  <a href="/statement">Statement of Faith</a>
                  <a href="/ContactUs">Contact Us</a>
              </div>

            

          </div>

          <div className="dropdown">
            <a className="dropbtn" href="/References">References</a>

              <div className="dropdown-content">
                  <a href="/bible-statement">Bible References</a>
                  <a href="/interesting-facts" Interesting Facts>Intersting Facts</a>
                  <a href="/maps">Map</a>
              </div>

          </div>

        </div>

        <Routes>
          <Route path='/services' element={<Services />} />
          <Route path='/admin' element={<AdminHelp />} />
          <Route path='/services' element={<Services />} />
          <Route path='/ffa' element={<FFA />} />
          <Route path='/counseling' element={<Counseling />} />

          <Route path='/resources' element={<Resources />} />
          <Route path='/MissionCheckList' element={<MissionCheckList />} />
          <Route path='/books' element={<Books />} />
          <Route path='/interesting-facts' element={<InterestingFacts />} />
          <Route path='/AreasThatNeedMissionaries' element={<AreasThatNeedMissionaries />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/blog' element={<Blog />} />

          <Route path='/about' element={<About />} />
          <Route path='/statement' element={<StatementOfFaith />} />
          <Route path='/ContactUs' element={<ContactUs />} />

          <Route path='/references' element={<References />} />

          <Route path='/bible-statement' element={<BibleReference />} />
          <Route path='/maps' element={<BasicMap />} />



          <Route path='/' exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
