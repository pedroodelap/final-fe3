import React, { useState } from 'react';

import { useDentiStates } from './utils/global.context';

import { Link, useNavigate } from 'react-router-dom';

import '../index.css'






const Navbar = () => {

  
  const { dentiState, dentiDispatch } = useDentiStates();

  const [ search, setSearch ] = useState('');

  const buscar = (e) => {
    e.preventDefault();
    console.log(search);
    
  }

  const navigate = useNavigate();

  const handleMode = () => {
    if ( dentiState.theme === 'light'){
      dentiDispatch({type: "THEME", payload: "dark"})
    } else {
      dentiDispatch({type: "THEME", payload: "light"})
    }
  };

  return (
    <nav className={dentiState.theme}>
      <section className="navsection">
        <button className="button back-btn" onClick={()=> navigate(-1)}> ➜ </button>
        <Link className="link" to="/"><h4>Home</h4></Link>
        <Link className="link" to="/contacto"><h4>Contacto</h4></Link>
        <Link className="link" to="/dentist/:id"><h4>Detalle</h4></Link>
        <Link className="link" to="/favs"><h4>Destacados</h4></Link>
        <button onClick={handleMode}className="button">Change theme</button>
      </section>

      <section className="navsection2">
        <input type='text' placeholder="ingrese nombre de dentista" onChange={((e)=> setSearch(e.target.value))} />
        <button type='submit' onClick={buscar}>Buscar</button>
      </section>

      
    </nav>
  )
}

export default Navbar