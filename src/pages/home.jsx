import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import globe from './pics/Globe.svg';
import soup from './pics/Soup.png';

function Home() {
  return (
    <div className="App">
      <h1 className="title" id="title">Background Ministries</h1>

      <h2 className="title" id="subtitle">Putting and Keeping Missionaries in the Field</h2>

      <div id="image-container">
        <div className="container" id="laptop">
          <h2>We Take Care of the Difficult Parts</h2>
          <img id="head-image" src="https://image.flaticon.com/icons/png/512/2828/2828957.png" alt="Man working on laptop" width="250px" /></div>

        <div className="container" id="serve">
          <h2>While You Focus on Your Mission</h2>
          <img id="soup-image" src={soup} width="250px" />
        </div>
      </div>
      <h3 className="title main-text" id="aboutUs-title">What We Do</h3>

      <p className="section main-text" id="aboutUs-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque tempore incidunt mollitia dignissimos odit earum voluptas quibusdam maxime id voluptatum, cupiditate maiores, harum reiciendis architecto saepe voluptate minus officiis?</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum quae eius consequatur, temporibus tempora velit cumque repellendus magni nesciunt suscipit beatae cum corrupti voluptate quisquam consectetur corporis excepturi. Itaque.</p>

      <div className="Quote-Container" id="World">
        <img id="globe" src={globe} alt="World Map" />

        <p className="Bible-Quote main-text" id="Matt28">
          Now the eleven disciples went to Galilee, to the mountain to which Jesus had directed them. And when they saw him they worshiped him, but some doubted. And Jesus came and said to them, “All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”
      </p>

        <div className="Quote-Name" id="matt28"><em>~ Matthew 28. 16 - 20</em></div>
      </div>
    </div>
  );
}

export default Home;














