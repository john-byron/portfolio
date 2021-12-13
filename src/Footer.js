import React from 'react';

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


function Footer() {
    return (
        <div>
            <footer>
                <h1>Footer</h1>

                <div class="sitemap">
                    <a className="foot-links" id="" href="/">Home</a> <br />
                    <a className="foot-links" id="" href="/Services">Services</a> <br />
                    <a className="foot-links" id="" href="/Admin">Help With The Boring Stuff</a> <br />
                    <a className="foot-links" id="" href="/FFA">Help With Fundraising</a> <br />
                    <a className="foot-links" id="" href="/Counseling">Help With Your Mental State</a> <br />
                    <a className="foot-links" id="" href="/Resources">Resources</a> <br />
                    <a className="foot-links" id="" href="/MissionCheckList">Missionary Check List</a> <br />
                    <a className="foot-links" id="" href="/Books">Books To Read</a> <br />
                    <a className="foot-links" id="" href="/interesting-facts" Interesting Facts>Intersting Facts</a> <br />
                    <a className="foot-links" id="" href="/AreasThatNeedMissionaries">Areas That Need Missionaries</a> <br />
                    <a className="foot-links" id="" href="/Budget">Help with Budgeting For Your Mission</a> <br />
                    <a className="foot-links" id="" href="/Blog">Our Blog</a> <br />
                    <a className="foot-links" id="" href="/About" >About Us</a> <br />
                    <a className="foot-links" id="" href="/statement">Statement of Faith</a> <br />
                    <a className="foot-links" id="" href="/ContactUs">Contact Us</a> <br />

                </div>

            </footer>
        </div>
    )
}

export default Footer
