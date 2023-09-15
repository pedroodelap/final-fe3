import React, { useState, useEffect } from "react";

import { useDentiStates } from "../Components/utils/global.context";

import Card from "../Components/Card";



const Favs = () => {

  const { dentiState } = useDentiStates();
  
  return (
    
    <div className={dentiState.theme}>

      <h1>Dentists Favs</h1>

      <div className="card-grid">
        
        {dentiState.favs.map(favorito => 
          <Card data={favorito} key={favorito.id} />
          )}
      </div>

    </div>
  );
};

export default Favs;
