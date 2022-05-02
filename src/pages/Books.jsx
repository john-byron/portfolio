import React from 'react'

function Books() {

    let books = [
        {Link:'', Photo:'', Title:'Let The Nations Be Glad', Author:'John Piper', Description:''},
        {Link:'', Photo:'', Title:'The Master Plan Of Evangelism', Author:'Dr. Robert E. Coleman', Description:''},
        {Link:'', Photo:'', Title:'Discipleship - From the 9marks church basics series', Author:'Mark Dever', Description:''},
        {Link:'', Photo:'', Title:'Evangelism As Exiles', Author:'Elliot Clark', Description:''},
        {Link:'', Photo:'', Title:'Tradecraft: For The Church On Mission', Author:'Larry E. McCrary', Description:''},
        {Link:'', Photo:'', Title:'Union With Christ', Author:'J. Todd Billings', Description:''},
    ]

    // document.getElementById("title").innerHTML = books.Title;

    return (
        <div>
            <h1>Books That Might Help You With Your Mission</h1>

            
            {/* for (let i =0; i<books.length; i++) {
                
                <img className="book-list" id="image[i]" src=[books.Photo] alt="Image of the book [books.Title]"  />
                <h3  className="book-list" id="title[i]">[books.Title]</h3>
                <h4  className="book-list" id="author[i]">[books.Author]</h4>
                <p   className="book-list" id="description[i]">[books.Description]</p>
                
            } */}
        </div>
    )
}

export default Books
