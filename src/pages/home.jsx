import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';

// import '/App.css';

function Home() {
  return (
    <div className="App">
      <h1 className="title" id="title">Background Ministries</h1>

      <h2 className="title" id="subtitle">Putting and Keeping Missionaries in the Field</h2>

<div id="image-container">
      <div className="container" id="laptop">
        <h2>We Do This</h2>
      <img id="head-image" src="https://image.flaticon.com/icons/png/512/2828/2828957.png" alt="Man working on laptop" width="250px"  /></div>
      
      <div className="container" id="serve">
      <h2>While You Do This</h2>
      <img id="soup-image" src="https://media.istockphoto.com/vectors/volunteers-feed-the-poor-beggar-and-homeless-people-vector-id1188168141?k=6&m=1188168141&s=170667a&w=0&h=LnrJ7YQkau5nZZAWHyX737MuaxH6yjKoMQ7CxxEV4Tk=" alt="People serving soup" width="250px"  />
      </div>
      </div>
      <h3 className="title main-text" id="aboutUs-title">What We Do</h3>

      <p className="section main-text" id="aboutUs-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque tempore incidunt mollitia dignissimos odit earum voluptas quibusdam maxime id voluptatum, cupiditate maiores, harum reiciendis architecto saepe voluptate minus officiis?</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum quae eius consequatur, temporibus tempora velit cumque repellendus magni nesciunt suscipit beatae cum corrupti voluptate quisquam consectetur corporis excepturi. Itaque.</p>

      <img src="https://static.wixstatic.com/media/e3377a_4cfc3397138d4c669ff95b652ebcf2d9~mv2.jpg" alt="World Map"/>

      <p className="Bible-Quote main-text" id="Matt28">
      Now the eleven disciples went to Galilee, to the mountain to which Jesus had directed them. And when they saw him they worshiped him, but some doubted. And Jesus came and said to them, “All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”
      </p>

      <div className="Quote-Name"><em>~ Matthew 28. 16 - 20</em></div>
    </div>
  );
}

export default Home;
