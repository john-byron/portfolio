import React from 'react';

// import {d3, select, json} from 'https://d3js.org/d3.v6.min.js';


// Source for world dataset use the CIA world factbook.
// There is an API for this information in Git Hub at
// src = "https://github.com/iancoleman/cia_world_factbook_api"


function BasicMap() {
    return (

        
        <div>
            json('https://d3js.org/us-10m.v1.json')


           <h1 className="map-title" id="basicMap-title">Basic Map</h1> 

          <svg width='960' height='500' className="map" id="basicMap">
              
              </svg>  

        </div>
    )
}

export default BasicMap
