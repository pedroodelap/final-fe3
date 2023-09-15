import React, { useState, useEffect } from "react";

import { useDentiStates } from "./utils/global.context.jsx";

import { Link } from 'react-router-dom';

import '../index.css'


const Card = ({ data }) => {

  
  const { dentiState, dentiDispatch } = useDentiStates();

  
  const addFav = () => {
    console.log(dentiState.denti);
    
    dentiDispatch({type: "FAVS", payload: dentiState.denti});
    console.log(dentiState.favs);
  }

  return (

    <div className="card">

      
        <Link to={`/dentist/${data.id}`} key={data.id}>

          <div className="card-flex">

            <div>
            
              
              <p>Name: </p>
              <h3> {data.name}</h3>

              <p>Username: </p>
              <h3> {data.username}</h3>

              <p>ID: </p>
              <h3> {data.id}</h3>
              
            </div>

            <div>

              <img src="../../public/images/doctor.jpg" alt="pic" />
            
            </div>
          </div>

        </Link>


      <button onClick={addFav} className="favButton">Add fav</button>
        
    </div>
  );
};

export default Card;
