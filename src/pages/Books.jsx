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

            <img src="" alt="" id="image" />
            <h3 id="title"></h3>
            <h4 id="author"></h4>
            <p id="description"></p>
        </div>
    )
}

export default Books
