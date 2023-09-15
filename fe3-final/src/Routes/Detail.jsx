import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Card from '../Components/Card';

import { useDentiStates } from '../Components/utils/global.context';

import { Link, useParams } from 'react-router-dom'

import '../index.css'





const Detail = () => {

 
  const { dentiState, dentiDispatch } = useDentiStates();

  
  const params = useParams();
  
  
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  
  useEffect(() => {
    axios(url)
    .then(res => dentiDispatch({type: "DENTISTA", payload: res.data}))
  }, []);

  
  return (
    <>
      
      <div className={`"detail-card ${dentiState.theme}`}>
      
        <section>
        
          <h1>Detail Dentist id </h1>
          
          
          <p>Name: </p>
          
          <h2>{dentiState.denti.name}</h2>
          
          <p>email: {dentiState.denti.email}</p>
          
          <p>Phone: {dentiState.denti.phone}</p>
          
          <p>Website: <Link to={`https://www.${dentiState.denti.website}`} target="_blank" >{dentiState.denti.website}</Link></p>
        
        </section>
        
        <img src='../../public/images/doctor.jpg' alt="pic" />
      
      </div>
    
    </>
  )
}

export default Detail